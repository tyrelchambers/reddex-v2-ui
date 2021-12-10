export const websiteReducer = (state, action) => {
  switch (action.type) {
    case "INIT_WEBSITE": {
      return {
        ...action.payload,
      };
    }
    case "SET_WEBSITE": {
      const clone = { ...state };
      clone.enabled = action.payload;
      return clone;
    }

    case "SET_GENERAL": {
      const clone = { ...state };
      clone.general[action.field] = action.payload;
      return clone;
    }

    case "SET_SOCIAL": {
      const clone = { ...state };
      clone.social[action.field] = action.payload;
      return clone;
    }

    case "SET_COLOR": {
      const clone = { ...state };
      clone.theme[action.field] = action.payload;
      return clone;
    }

    case "SET_SUBMISSION_FORM": {
      const clone = { ...state };
      clone.submissionForm[action.field] = action.payload;
      return clone;
    }

    case "SET_SUBMISSION_FORM_MODULE": {
      const clone = { ...state };
      const _ = clone.submissionForm.modules.map((module) => {
        if (module.type === action.field) {
          module[action.subField] = action.payload;
        }
        return module;
      });
      return {
        ...clone,
        ..._,
      };
    }

    case "SET_TIMELINES": {
      const clone = { ...state };
      const _ = clone.timelines.map((module) => {
        if (module.type === action.field) {
          module[action.subField] = action.payload;
        }
        return module;
      });

      return {
        ...clone,
        ..._,
      };
    }

    case "RESET": {
      return action.payload;
    }

    default:
      return state;
  }
};
