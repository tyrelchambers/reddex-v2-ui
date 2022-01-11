import { useEffect, useState } from "react";

export const useExpand = () => {
  const [open, setState] = useState(false);

  useEffect(() => {
    if (open) {
      document.querySelector(".dash-body")?.classList.add("hidden");
    } else {
      document.querySelector(".dash-body")?.classList.remove("hidden");
    }
  }, [open]);

  const setOpen = (isOpen) => {
    setState(isOpen);
  };
  return { open, setOpen };
};
