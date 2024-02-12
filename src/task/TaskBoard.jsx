import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const { tasks, dispatch, showAddModal, setShowAddModal } =
    useContext(TaskContext);
  const [tskToUpdate, setTskToUpdate] = useState(null);

  const handleEditTask = (tsk) => {
    setTskToUpdate(tsk);
    setShowAddModal(true);
  };

  // logic for delete a single task
  const handleDeleteTask = (tskId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (isConfirmed) {
      dispatch({
        type: "DELETE_TASK",
        payload: tskId,
      });
    }
  };

  // logic for delete all task
  const handleDeleteAllTask = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all the task?"
    );
    if (isConfirmed) {
      dispatch({
        type: "DELETE_ALL_TASK",
        tasks,
      });
    }
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
              <TaskAction
                onAddClick={() => setShowAddModal(true)}
                onDeleteAllClick={handleDeleteAllTask}
              />
            </div>
          </div>

          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ) : (
            <p className="text-3xl text-center text-white font-semibold py-5">
              Task List is empty!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
