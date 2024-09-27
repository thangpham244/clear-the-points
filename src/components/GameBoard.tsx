import React from "react";

interface Point {
  number: number;
  x: number;
  y: number;
  clicked: boolean;
}

interface GameBoardProps {
  points: Point[];
  currentNumber: number;
  totalPoints: number;
  onPointClick: (number: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  points,
  currentNumber,
  totalPoints,
  onPointClick,
}) => {
  return (
    <div
      style={{
        marginTop: ".75rem",
        padding: ".5rem",
        outline: "1px solid black",
        height: "450px",
        width: "450px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {points.map(({ number, x, y, clicked }) => {
        const isCurrentPoint = number === currentNumber;
        return (
          <button
            key={number}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid black",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1rem",
              backgroundColor: clicked ? "red" : "white",
              color: clicked ? "white" : "black",
              transition: "opacity 1s ease-out, background-color 1s ease",
              lineHeight: "40px",
              zIndex: isCurrentPoint
                ? totalPoints + 1
                : totalPoints - number + 1,
            }}
            onClick={() => onPointClick(number)}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};
