import { useEffect, useState } from "react";

export const useDevice = () => {
  // get window width
  const [width, setWidth] = useState(window.innerWidth);

  // update window width on resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width };
};
