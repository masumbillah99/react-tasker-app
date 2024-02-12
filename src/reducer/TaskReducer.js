const initialState = [
  {
    id: crypto.randomUUID(),
    title: "Integration API",
    tags: ["Web", "Python", "API"],
    priority: "High",
    isFavorite: false,
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
  },
];

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
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
      return state.map((tsk) =>
        tsk.id === action.payload.id
          ? {
              ...tsk,
              ...action.payload,
            }
          : tsk
      );

    case "DELETE_TASK":
      return state.filter((tsk) => tsk.id !== action.payload.id);

    default:
      return state;
  }
};

export { initialState, taskReducer };
