import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context/TaskContext";
import ConfirmModal from "../modals/ConfirmModal";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const { tasks, dispatch, keyword, showAddModal, setShowAddModal } =
    useContext(TaskContext);
  const [tskToUpdate, setTskToUpdate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleEditTask = (tsk) => {
    setTskToUpdate(tsk);
    setShowAddModal(true);
  };

  // logic for delete a single task
  const handleDeleteTask = (tskId) => {
    // setModalOpen(true);
    // const thisTsk = tasks.filter((tsk) => tsk.id === tskId);
    // setMessage(thisTsk[0].title + " task");

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
    // setModalOpen(true);
    // setMessage("all tasks");

    dispatch({ type: "DELETE_ALL_TASK" });

    toast.success(`All tasks are deleted successfully`);

    // const isConfirmed = window.confirm(
    //   "Are you sure you want to delete all the task?"
    // );
    // if (isConfirmed) {
    //   dispatch({
    //     type: "DELETE_ALL_TASK",
    //     tasks,
    //   });
    // }
  };

  // logic for make favorite a task
  const handleToggleFavorite = (tskId) => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: tskId,
    });
  };

  // filter out matched search result tasks
  const searchResultTasks = tasks.filter((tsk) =>
    tsk.title.toLowerCase().includes(keyword.toLowerCase())
  );

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

          {modalOpen && (
            <ConfirmModal
              isOpen={modalOpen}
              message={message}
              onClose={() => setModalOpen(false)}
            />
          )}

          {tasks.length > 0 ? (
            searchResultTasks.length > 0 ? (
              <TaskList
                tasks={searchResultTasks}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onFavorite={handleToggleFavorite}
              />
            ) : (
              <p className="text-3xl text-center text-white font-semibold py-5">
                Not found {keyword} task
              </p>
            )
          ) : (
            <p className="text-3xl text-center text-white font-semibold py-5">
              Opps! Task List is empty...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
