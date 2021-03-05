const showModalReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return action.boolean;

    default:
      return state;
  }
};

export default showModalReducer;
