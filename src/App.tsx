import "./App.css";
import { ComingUpSection } from "./components/organisms/ComingUpSection";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { OverviewSection } from "./components/organisms/OverviewSection";
import { mockExams } from "./mocks/mock";
import { Page } from "./components/layout/Page";
import { Provider } from "jotai";
import { useEffect } from "react";
import { useUserData } from "./hooks/useUserData";
import { useExamData } from "./hooks/useExamData";

const App = () => {
  const { user, updateUser } = useUserData();
  const { exams, updateExams } = useExamData();

  useEffect(() => {
    // Initialize if empty
    if (!user.name) {
      updateUser({
        name: "Max Mustermann",
        degree: "BaTIN",
        semester: 1,
      });
    }

    if (exams.length === 0) {
      updateExams(mockExams);
    }
  }, []);

  return (
    <Provider>
      <Page header={<Navbar />} footer={<Footer />}>
        <section className="w-full max-w-5xl mx-auto pt-5 px-4 mb-28">
          <h1 className="text-white font-medium text-base mb-4">
            {`Hello ${user.name}`}
          </h1>
          <ComingUpSection />
          <OverviewSection exams={exams} />
        </section>
      </Page>
    </Provider>
  );
};

export default App;
