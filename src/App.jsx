import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";
import TaskProvider from "./context/TaskContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Navbar />
      <div className="flex flex-col max-w-screen-2xl mx-auto">
        <HeroSection />
        <TaskProvider>
          <TaskBoard />
        </TaskProvider>
      </div>
      <Footer />
      <ToastContainer position="bottom-left" autoClose={3000} />
    </div>
  );
}

export default App;
