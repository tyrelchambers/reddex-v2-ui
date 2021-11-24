export const filterReducer = (state, action) => {
  switch (action.type) {
    case "set_filter": {
      const clone = { ...state };
      if (!clone[action.filter]) {
        clone[action.filter] = {};
      } else {
        delete clone[action.filter];
      }

      return clone;
    }

    case "set_filter_value": {
      const clone = { ...state };

      if (clone[action.filter]["operator"]) {
        clone[action.filter]["operator"] = action.operator;
      }

      if (clone[action.filter]["value"]) {
        clone[action.filter]["value"] = action.value;
      }
      console.log(clone);
      return clone;
    }
    default:
      return state;
  }
};
