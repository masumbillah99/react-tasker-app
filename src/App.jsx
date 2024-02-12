import "./App.css";
import { useReducer } from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { TaskContext } from "./context";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import TaskBoard from "./task/TaskBoard";
import { initialState, taskReducer } from "./reducer/TaskReducer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Integration API",
    tags: ["Web", "Python", "API"],
    priority: "High",
    isFavorite: false,
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{ state, dispatch, showAddModal, setShowAddModal }}
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
