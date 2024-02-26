const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...tasks,
        {
          id: crypto.randomUUID(),
          title: action.payload.title,
          tags: action.payload.tags,
          priority: action.payload.priority,
          isFavorite: action.payload.isFavorite,
          description: action.payload.description,
        },
      ];

    case "EDIT_TASK":
      return tasks?.map((tsk) =>
        tsk.id === action.payload.id
          ? {
              ...tsk,
              ...action.payload,
            }
          : tsk
      );

    case "TOGGLE_FAVORITE":
      return tasks?.map((tsk) =>
        tsk.id === action.payload
          ? {
              ...tsk,
              isFavorite: !tsk.isFavorite,
            }
          : tsk
      );

    case "DELETE_TASK":
      return tasks?.filter((tsk) => tsk.id !== action.payload);

    case "DELETE_ALL_TASK":
      return (tasks.length = 0);

    default:
      return tasks;
  }
};

export { taskReducer };
