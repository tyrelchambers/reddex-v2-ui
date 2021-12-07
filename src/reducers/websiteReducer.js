export const websiteReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_WEBSITE":
      return action.website;
    case "SET_GENERAL": {
      const clone = { ...state };
      clone.general[action.field] = action.payload;

      return clone;
    }
    default:
      return state;
  }
};
