import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context";

export default function AddTaskModal({ tskToUpdate, setTskToUpdate }) {
  const { dispatch, setShowAddModal } = useContext(TaskContext);
  const [tsk, setTsk] = useState(
    tskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );
  const [isAdd, setIsAdd] = useState(Object.is(tskToUpdate, null));
  // console.log(isAdd);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    // split tags by comma separate
    if (name === "tags") {
      value = value.split(",");
    }

    setTsk({
      ...tsk,
      [name]: value,
    });
  };

  const handleAddTask = (newTsk) => {
    event.preventDefault;

    /** logic for empty fields */
    if (
      !newTsk.title.trim() ||
      !newTsk.description.trim() ||
      !newTsk.priority
    ) {
      toast.warn("Please fill out all the required fields");
      return;
    }

    /** dispatch an action to add the new task */
    if (isAdd) {
      dispatch({
        type: "ADD_TASK",
        payload: newTsk,
      });
    } else {
      dispatch({
        type: "EDIT_TASK",
        payload: newTsk,
      });
    }

    setShowAddModal(false);
    // set tsk to update state null & false
    setTskToUpdate(null);
  };

  const handleClose = () => {
    setShowAddModal(false);
    setTskToUpdate(null);
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute lg:top-40 left-0 lg:left-1/3">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Edit Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={tsk.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={tsk.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={tsk.tags}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={tsk.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-row-reverse justify-between lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() => handleAddTask(tsk, isAdd)}
          >
            {isAdd ? "Create new Task" : "Update Task"}
          </button>
          <button
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
}
