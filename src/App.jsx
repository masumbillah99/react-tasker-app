import "./App.css";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import TaskBoard from "./task/TaskBoard";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Navbar />
      <div className="flex flex-col max-w-screen-2xl mx-auto">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
