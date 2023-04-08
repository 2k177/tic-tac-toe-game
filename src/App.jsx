import './styles.scss';
import Board from './components/board';
import { useState } from 'react';
import { calculateWinner } from './components/winner';

function App() {
  const [square, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(false);
  console.log(square);
  const winner = calculateWinner(square);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextPlayer}`;

  const handleSquareClick = clickedPosition => {
    if (square[clickedPosition] || winner) {
      return;
    }
    setSquares(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setisXNext(currentIsNext => !currentIsNext);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      {/* <h3>{statusMessage}</h3> */}
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
