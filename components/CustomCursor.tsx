"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top  = `${my}px`;
    };

    let id: number;
    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;
      id = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => { ring.style.width="44px"; ring.style.height="44px"; ring.style.borderColor="rgba(245,166,35,0.7)"; };
    const onLeave = () => { ring.style.width="30px"; ring.style.height="30px"; ring.style.borderColor="rgba(75,92,196,0.45)"; };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(id); };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot  -translate-x-1/2 -translate-y-1/2"/>
      <div ref={ringRef} className="cursor-ring -translate-x-1/2 -translate-y-1/2"/>
    </>
  );
}
