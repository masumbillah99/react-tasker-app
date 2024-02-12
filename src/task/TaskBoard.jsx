import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const { state, showAddModal, setShowAddModal } = useContext(TaskContext);
  const [tskToUpdate, setTskToUpdate] = useState(null);

  const handleEditTask = (tsk) => {
    setTskToUpdate(tsk);
    setShowAddModal(true);
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          tskToUpdate={tskToUpdate}
          setTskToUpdate={setTskToUpdate}
        />
      )}

      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <SearchTask />
              <TaskAction onAddClick={() => setShowAddModal(true)} />
            </div>
          </div>

          <TaskList tasks={state} onEdit={handleEditTask} />
        </div>
      </div>
    </section>
  );
}
