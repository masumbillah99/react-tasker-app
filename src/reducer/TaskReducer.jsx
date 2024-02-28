const taskReducer = (draft, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      draft.push({
        id: crypto.randomUUID(),
        title: action.payload.title,
        tags: action.payload.tags,
        priority: action.payload.priority,
        isFavorite: action.payload.isFavorite,
        description: action.payload.description,
      });
      break;
      {
        /* if you have to forget use break; react will go to 
        the next step. next step means he will go to default case.
        that will be harmful for project */
      }
    }

    case "EDIT_TASK": {
      const index = draft.findIndex((t) => t.id === action.payload.id);
      draft[index] = action.payload;

      break;
    }

    case "TOGGLE_FAVORITE": {
      const index = draft.findIndex((t) => t.id === action.payload);
      draft[index].isFavorite = !draft[index].isFavorite;

      break;
    }

    case "DELETE_TASK": {
      return draft.filter((t) => t.id !== action.payload);
    }

    case "DELETE_ALL_TASK": {
      return [];
    }

    default: {
      throw Error(`No action matched with ${action.type}`);
    }
  }
};

export { taskReducer };

{
  /* 
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
      return [];

    default:
      return tasks;
}
*/
}
