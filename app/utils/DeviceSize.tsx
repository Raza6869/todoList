import { useEffect, useState } from "react";

export const DeviceSize = () => {
  const [width, setWidth] = useState(0);

  const handleWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowSize();
    window.addEventListener("resize", handleWindowSize);

    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  return width;
};
