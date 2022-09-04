import React, { useState } from "react"

const Player = ({ handleChange, player }) => {
  return (
    <div className="playerMove" onClick={handleChange}>
      <p>Ruch gracza: {player}</p>
    </div>
  )
}

export default Player
