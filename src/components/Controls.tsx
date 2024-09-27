import React from "react";

interface ControlsProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  time: number;
  gameState: "normal" | "playing" | "gameOver" | "cleared";
  onStartGame: () => void;
  onRestartGame: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  inputValue,
  setInputValue,
  time,
  gameState,
  onStartGame,
  onRestartGame,
}) => {
  return (
    <div>
      <div style={{ marginBottom: ".5rem" }}>
        <label htmlFor="pointNumber" style={{ marginRight: "5rem" }}>
          Points:
        </label>
        <input
          id="pointNumber"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: ".5rem" }}>
        <span style={{ marginRight: "5.5rem" }}>Time:</span>
        <span>{time.toFixed(1)}s</span>
      </div>
      <button style={{ width: "6.5rem" }} onClick={gameState === "playing" ? onRestartGame : onStartGame}>
        {gameState === "playing" ? "Restart" : "Play"}
      </button>
    </div>
  );
};
