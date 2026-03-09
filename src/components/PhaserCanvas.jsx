import { useEffect, useRef } from "react";
import { createPhaserGame } from "../game/game";

export default function PhaserCanvas() {
  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!gameRef.current) {
      gameRef.current = createPhaserGame(containerRef.current.id);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    }; 
  }, []);

  return (
    <div
      id="phaser-container"
      ref={containerRef}
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    />
  );
}
