import { useState } from "react";

export const useTab = (tab) => {
  const [currentTab, setstate] = useState(tab);

  const setTab = (tab) => {
    setstate(tab);
  };
  return [currentTab, setTab];
};
