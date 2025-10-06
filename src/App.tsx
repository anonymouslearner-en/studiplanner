import "./App.css";
import { ComingUpSection } from "./components/ComingUpSection";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { OverviewSection } from "./components/OverviewSection";
import { mockExams } from "./mocks/mock";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-accent-300 overflow-x-hidden flex flex-col">
        <div className="w-full max-w-5xl mx-auto pt-5 px-4 mb-28">
          <h1 className="text-white font-medium text-base mb-4">Hello</h1>
          <ComingUpSection />
          <OverviewSection exams={mockExams} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
