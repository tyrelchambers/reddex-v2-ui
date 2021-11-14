import React, { createContext, useState } from "react";

const TabContext = createContext();

const TabProvider = ({ children }) => {
  const url = new URLSearchParams(window.location.search);
  const [tab, setTab] = useState(url.get("tab"));

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

const useTab = () => {
  const context = React.useContext(TabContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { TabProvider, useTab };
