import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<{
    x?: number;
    y?: number;
  }>({
    x: undefined,
    y: undefined,
  });

  const updateMouseWheel = (e: MouseEvent, rect: DOMRect) => {
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const doc = document.getElementById("banner");
    if (!doc) return;
    doc.addEventListener("mousemove", (e) =>
      updateMouseWheel(e, doc.getBoundingClientRect())
    );
    return () =>
      removeEventListener("mousemove", (e) =>
        updateMouseWheel(e, doc.getBoundingClientRect())
      );
  }, []);

  return mousePosition;
}
