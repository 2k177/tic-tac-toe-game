import './styles.scss';
import Board from './components/board';
import { useState } from 'react';
import { calculateWinner } from './components/winner';
import StatusMessage from './components/StatusMessage';

function App() {
  const [square, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(false);
  console.log(square);

  const winner = calculateWinner(square);

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
      {/* <h2>{statusMessage}</h2> */}
      <StatusMessage winner={winner} isXNext={isXNext} square={square} />
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
