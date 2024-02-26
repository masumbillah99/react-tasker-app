import "./App.css";
import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import { TaskContext } from "./context";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";
import { initialTasks } from "./data/task";
import { taskReducer } from "./reducer/TaskReducer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [showAddModal, setShowAddModal] = useState(false);
  const [keyword, setKeyword] = useState("");

  return (
    <TaskContext.Provider
      value={{
        tasks,
        dispatch,
        keyword,
        setKeyword,
        showAddModal,
        setShowAddModal,
      }}
    >
      <div className="bg-[#191D26] font-[Inter] text-white">
        <Navbar />
        <div className="flex flex-col max-w-screen-2xl mx-auto">
          <HeroSection />
          <TaskBoard />
        </div>
        <Footer />
      </div>

      <ToastContainer />
    </TaskContext.Provider>
  );
}

export default App;
