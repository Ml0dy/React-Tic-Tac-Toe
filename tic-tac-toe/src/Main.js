import React, { useState } from "react"

import "./Main.css"

import Player from "./components/Player"

function App() {
  const [player, setPlayer] = useState("x")
  const [cells, setCells] = useState(Array(9).fill(""))
  const [winner, setWinner] = useState()

  const checkWinner = (fields) => {
    const combinations = {
      vertical: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      horizontal: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    }

    for (let combination in combinations) {
      combinations[combination].forEach((element) => {
        if (
          fields[element[0]] === "" ||
          fields[element[3]] === "" ||
          fields[element[2]] === ""
        ) {
        } else if (
          fields[element[0]] === fields[element[1]] &&
          fields[element[1]] === fields[element[2]]
        ) {
          setWinner(fields[element[0]])
        }
      })
    }
  }

  const handleChangePlayer = (number) => {
    if (winner) {
      return
    } else {
      let fields = [...cells]

      if (fields[number] !== "") {
        return
      }

      if (player === "x") {
        fields[number] = "x"
        setPlayer("o")
      } else {
        fields[number] = "o"
        setPlayer("x")
      }
      checkWinner(fields)
      setCells(fields)
    }
  }

  const handleResetFields = () => {
    setWinner()
    setCells(Array(9).fill(""))
  }

  const Cell = ({ fieldNumber }) => (
    <td onClick={() => handleChangePlayer(fieldNumber)} className="gameField">
      {cells[fieldNumber]}
    </td>
  )

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Player player={player} handleChange={handleChangePlayer} />
      <button onClick={handleResetFields}>Reset</button>
      {winner && (
        <>
          <p>Wygrał gracz: {winner}</p>
        </>
      )}
      <div className="field">
        <table>
          <tbody>
            <tr>
              <Cell fieldNumber={0} />
              <Cell fieldNumber={1} />
              <Cell fieldNumber={2} />
            </tr>
            <tr>
              <Cell fieldNumber={3} />
              <Cell fieldNumber={4} />
              <Cell fieldNumber={5} />
            </tr>
            <tr>
              <Cell fieldNumber={6} />
              <Cell fieldNumber={7} />
              <Cell fieldNumber={8} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
