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
import { OnboardingForm } from "./forms/OnboardingForm";

const App = () => {
  const { user, updateUser } = useUserData();
  const { exams, updateExams } = useExamData();

  useEffect(() => {
    if (!user.name) {
      updateUser({
        name: undefined,
        degree: undefined,
        semester: 1,
        firstVisitComplete: false,
        isRegistered: false,
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
            {`Hello ${user.name != undefined ? user.name : "Stranger"}`}
          </h1>
          <ComingUpSection />
          <OverviewSection exams={exams} />
        </section>
      </Page>

      <OnboardingForm />
    </Provider>
  );
};

export default App;
