import { useEffect } from "react";

const useMouseGlow = () => {
  useEffect(() => {
    const onPointerMove = (event) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`,
      );
      document.querySelectorAll(".card,.btn,.skill").forEach((element) => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        element.style.setProperty("--my", `${event.clientY - rect.top}px`);
      });
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);
};

export default useMouseGlow;
