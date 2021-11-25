export const filterReducer = (state, action) => {
  switch (action.type) {
    case "set_filter": {
      const clone = { ...state };

      if (!clone[action.filter]) {
        clone[action.filter] = {
          value: action.defaults.value,
          operator: action.defaults.operator,
        };
      } else {
        delete clone[action.filter];
      }
      return clone;
    }

    case "set_filter_value": {
      const clone = { ...state };

      if (action.operator) {
        clone[action.filter]["operator"] = action.operator;
      }

      if (action.value) {
        clone[action.filter]["value"] = action.value;
      }
      return clone;
    }

    case "set_misc_value": {
      const clone = { ...state };

      if (clone[action.filter] && clone[action.filter].value === action.value) {
        delete clone[action.filter];
        return clone;
      }

      if (action.filter && action.value) {
        clone[action.filter] = { value: action.value };
      }

      return clone;
    }

    default:
      return state;
  }
};
