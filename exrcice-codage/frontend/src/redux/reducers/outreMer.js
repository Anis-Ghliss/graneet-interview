export const outreMer = (state = [], action) => {
  switch (action.type) {
    case "SETOUTREMER":
      console.log("here reducer outremer", action.payload);

      return action.payload;

    default:
      return state;
  }
};
