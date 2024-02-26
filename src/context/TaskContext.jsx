import { createContext, useReducer, useState } from "react";
import { initialTasks } from "../data/task";
import { taskReducer } from "../reducer/TaskReducer";

export const TaskContext = createContext(null);

export default function TaskProvider({ children }) {
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
      {children}
    </TaskContext.Provider>
  );
}
