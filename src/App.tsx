import "./App.css";
import { ComingUpSection } from "./components/organisms/ComingUpSection";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { OverviewSection } from "./components/organisms/OverviewSection";
import { mockExams } from "./mocks/mock";
import { Page } from "./components/layout/Page";

function App() {
  return (
    <Page header={<Navbar />} footer={<Footer />}>
      <div className="w-full max-w-5xl mx-auto pt-5 px-4 mb-28">
        <h1 className="text-white font-medium text-base mb-4">Hello</h1>
        <ComingUpSection />
        <OverviewSection exams={mockExams} />
      </div>
    </Page>
  );
}

export default App;
