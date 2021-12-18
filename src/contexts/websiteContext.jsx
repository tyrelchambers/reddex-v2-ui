import React, { useReducer } from "react";
import { initialState } from "../constants/website";
import { websiteReducer } from "../reducers/websiteReducer";

const WebsiteStore = ({ children }) => {
  const [state, dispatch] = useReducer(websiteReducer, initialState);
  return (
    <WebsiteContext.Provider value={[state, dispatch]}>
      {children}
    </WebsiteContext.Provider>
  );
};
export const WebsiteContext = React.createContext();

export default WebsiteStore;
