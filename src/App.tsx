import "./App.css";
import { ComingUpSection } from "./components/ComingUpSection";
import { Navbar } from "./components/Navbar";
import { OverviewSection } from "./components/OverviewSection";

function App() {
  return (
    <main className="w-screen h-screen bg-white max-h-screen overflow-y-auto">
      <Navbar />
      <div className="w-full max-w-5xl mx-auto pt-5">
        <h1>Hello</h1>
        <ComingUpSection />
        <OverviewSection />
      </div>
    </main>
  );
}

export default App;
