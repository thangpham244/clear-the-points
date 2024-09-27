import React from "react";

interface HeaderProps {
  gameState: "normal" | "playing" | "gameOver" | "cleared";
}

export const Header: React.FC<HeaderProps> = ({ gameState }) => {
  const getHeaderText = () => {
    switch (gameState) {
      case "gameOver":
        return <h3 style={{ color: "red", margin: "0" }}>GAME OVER</h3>;
      case "cleared":
        return <h3 style={{ color: "green", margin: "0" }}>ALL CLEARED</h3>;
      default:
        return <h3 style={{ color: "black", margin: "0" }}>LET'S PLAY</h3>;
    }
  };

  return <header style={{ marginTop: "2rem", marginBottom: ".5rem" }}>{getHeaderText()}</header>;
};
