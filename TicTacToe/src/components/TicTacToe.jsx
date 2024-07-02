import React, { useEffect, useState } from "react";
import RestartModal from "./RestartModal";

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-red-500 h-[100px] text-5xl mr-[-1px] mt-[-1px] items-center justify-center font-bold flex text-center w-[100px]"
    >
      {value}
    </button>
  );
};
const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("");
  const [isXturn, setIsXturn] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = (getCurrSquare) => {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[getCurrSquare]) return;
    copySquares[getCurrSquare] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);
    setSquares(copySquares);
  };
  const getWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is Draw! Please restart the game");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}`);
    } else {
      setStatus(`Next player is ${isXturn ? "X" : "O"}`);
    }
  }, [squares, isXturn]);
  const handleRestart = () => {
    setIsXturn(true);
    // setSquares(Array(9).fill(""));
    setIsVisible(true);
  };
  return (
    <>
      <div className="relative flex h-screen items-center flex-col">
        <div className="flex items-start mt-10 justify-center">
          <div className="">
            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)} />
            <Square value={squares[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="">
            <Square value={squares[3]} onClick={() => handleClick(3)} />
            <Square value={squares[4]} onClick={() => handleClick(4)} />
            <Square value={squares[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="">
            <Square value={squares[6]} onClick={() => handleClick(6)} />
            <Square value={squares[7]} onClick={() => handleClick(7)} />
            <Square value={squares[8]} onClick={() => handleClick(8)} />
          </div>
        </div>
        <div className=" flex items-center flex-col justify-center">
          <h1 className="font-bold text-3xl py-4">{status}</h1>
          <button
            onClick={handleRestart}
            className="bg-red-600 text-white font-bold px-5 py-3 rounded-3xl"
          >
            Restart
          </button>
        </div>
        <RestartModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          setIsXturn={setIsXturn}
          setSquares={setSquares}
        />
      </div>
    </>
  );
};

export default TicTacToe;
