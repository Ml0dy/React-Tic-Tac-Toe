import "./Main.css"
import Field from "./components/Fields"
import Player from "./components/Player"

function App() {
  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Player />
      <Field />
    </div>
  )
}

export default App
