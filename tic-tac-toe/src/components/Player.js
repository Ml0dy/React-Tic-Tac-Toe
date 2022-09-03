import React, { useState } from "react"

const Player = () => {
  const [player, setPlayer] = useState("X")

  const handleChangePlayer = () =>
    player === "X" ? setPlayer("O") : setPlayer("X")

  return (
    <div onClick={handleChangePlayer}>
      <p>Ruch gracza: {player}</p>
    </div>
  )
}

export default Player
