import {useState, useEffect} from 'react';

export default function Board(){
    const [board, setBoard] = useState([
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', '1', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', '0', 'X', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', '0', '0', 'X', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', '0', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X'],
        ['X', '0', '0', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X'],
        ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
        ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
        ['X', '0', '0', '0', 'X', '0', '0', '0', '0', 'Y', '0', 'X'],
        ['X', '0', '0', 'X', 'X', 'X', '0', '0', '0', '0', '0', 'X'],
        ['X', '0', '0', '0', 'X', '0', '0', '0', '0', '0', '0', 'X'],
        ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
        ['X', '0', '0', 'Y', '0', '0', '0', '0', '0', '0', '0', 'X'],
        ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      ]);
    const toRepeat = board[1].length;
    const borderPositions = [];

    const [currentPosition, setCurrentPosition] = useState();

    function findCurrentPosition(){
      setCurrentPosition(() => {
        for(let i = 0; i < board.length; i++){
          if(board[i].includes('1')){
            let y = board.indexOf(board[i]);
            let x = board[i].indexOf('1')
            return [x, y]
          }
        }
      })
    }
    function findXPositions(){
      for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
          if(board[i][j].includes('X')){
            borderPositions.push([i, j])
          }
        }
      }
    }
    function test(){
      console.log(borderPositions)
    }

    function changeCoordinates(){
      let newBoard = board;

      for(let i = 0; i < borderPositions.length; i++){
          if([currentPosition[0] + 1, currentPosition[1] + 1] === borderPositions[i]){
            console.log('dupa')
          }
      }

      newBoard[currentPosition[0]][currentPosition[1]] = '0';
      newBoard[currentPosition[0] + 1][currentPosition[1] + 1] = '1';
      setBoard(newBoard)
    }
      return(
        <>
        <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${toRepeat}, 35px)`
        }}>
        {
            board.map((rows, rowIndex) => 
                rows.map((col, colIndex) => 
                    <div key={colIndex - rowIndex} className={board[rowIndex][colIndex] === 'X' ? 'cell border' : board[rowIndex][colIndex] === '0' ? 'cell road' : board[rowIndex][colIndex] === 'Y' ? 'cell collision' : 'cell ball'}
            ></div>))
        }
        </div>
        <button onClick={findCurrentPosition}>FIND</button>
        <button onClick={changeCoordinates}>CHANGE</button>
        <button onClick={findXPositions}>TEST</button>
        <button onClick={test}>TEST</button>
        </>
      )
}