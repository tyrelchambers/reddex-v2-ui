import { useState } from "react";

export const useExpand = () => {
  const [open, setState] = useState(false);

  const setOpen = (isOpen) => {
    setState(isOpen);
  };
  return { open, setOpen };
};
