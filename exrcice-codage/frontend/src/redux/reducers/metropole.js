export const metropole = (state = [], action) => {
  switch (action.type) {
    case "SETMETROPOLE":
      console.log("here reducer metropole", action.payload);
      return action.payload;

    default:
      return state;
  }
};
