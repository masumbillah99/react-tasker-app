import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Integration API",
    tags: ["Web", "Python", "API"],
    priority: "High",
    isFavorite: false,
    description:
      " Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
  };
  const [tasks, setTasks] = useState([defaultTask]);

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <SearchTask />
              <TaskAction />
            </div>
          </div>

          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
