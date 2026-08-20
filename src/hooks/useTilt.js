import { useCallback } from "react";

const useTilt = () => {
  const onPointerMove = useCallback((event) => {
    if (window.innerWidth < 900) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
  }, []);

  const onPointerLeave = useCallback((event) => {
    event.currentTarget.style.transform = "";
  }, []);
  return { onPointerMove, onPointerLeave };
};

export default useTilt;
