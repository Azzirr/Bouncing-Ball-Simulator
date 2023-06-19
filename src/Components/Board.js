import {useState} from 'react';

export default function Board(){
    const [board, setBoard] = useState([
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', '1', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
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
    
    function findCurrentPosition(){
        for(let i = 0; i < board.length; i++){
            if(board[i].includes('1')){
                let x = board[i].indexOf('1')
                let y = board.indexOf(board[i]);
                ball.positionX = x;
                ball.positionY = y;
            }
        }
    }

    const ball = {
        positionX: 1,
        positionY: 1,
        directionX: 1,
        directionY: 1
    }

    const directions = [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1]
    ]

    function randomizeDirection(){
        let currentDirection = [ball.directionX, ball.directionY]
        const directionsWithoutCurrent = directions.filter(direction => JSON.stringify(direction) !== JSON.stringify(currentDirection));
        let randomDirection = directionsWithoutCurrent[Math.floor(Math.random()*directionsWithoutCurrent.length)];
        ball.directionX = -randomDirection[0];
        ball.directionY = -randomDirection[1];
    }

    function run(){
        findCurrentPosition();
        setInterval(() => {
            function moveDiv(cell){
                newBoard[ball.positionY][ball.positionX] = cell.toString();
                setBoard(newBoard)
            }
            const nextX = ball.positionX + ball.directionX;
            const nextY = ball.positionY + ball.directionY;
            let newBoard = [...board];
            moveDiv(0);
            if (board[nextY][nextX] === 'X') {
            //  Ball hit a wall, change direction
              randomizeDirection();             
            } else if(board[nextY][nextX] === 'Y') {
              ball.positionX = nextX;
              ball.positionY = nextY;
              randomizeDirection();
            } else {
              // Update ball position
              ball.positionX = nextX;
              ball.positionY = nextY;
            }
            moveDiv(1);
        }, 100);
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
        <button onClick={run}>RUN</button>
        <button onClick={randomizeDirection}>Randomize</button>
        </>
      )
}