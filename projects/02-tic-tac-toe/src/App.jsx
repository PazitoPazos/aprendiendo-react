import { useState } from "react"
import confetti from 'canvas-confetti'
import Square from "./components/Square"
import { TURNS } from "./constants"
import { checkWinnerFrom, checkIfGameIsOver } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"
import { saveGameToStorage, resetGameStorage } from "./logic/storage"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => { 
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkIfGameIsOver(newBoard)) {
      setWinner(false)
    }
  }
  

  return (
    <main className="board">
      <h1>
        Tic Tac Toe
      </h1>
      <button onClick={resetGame}>Resetear juego</button>
      <section className="game">
        {
          board.map((_, index) => { 
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={TURNS.X === turn}>
          {TURNS.X}
        </Square>
        <Square isSelected={TURNS.O === turn}>
          {TURNS.O}
        </Square>
      </section>

      <section>
        <WinnerModal 
          winner={winner}
          resetGame={resetGame}
        />
      </section>
    </main>
  )
}

export default App
