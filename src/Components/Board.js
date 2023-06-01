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
        ['X', '0', '0', '0', '0', '0', '0', 'X', '0', '0', '0', 'X'],
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
    // TO DO! FOR LOOP THAT MAKING THIS ARRAY FOR ME!!!
    const borderPositions = [
        [5, 5],
      [
          0,
          0
      ],
      [
          0,
          1
      ],
      [
          0,
          2
      ],
      [
          0,
          3
      ],
      [
          0,
          4
      ],
      [
          0,
          5
      ],
      [
          0,
          6
      ],
      [
          0,
          7
      ],
      [
          0,
          8
      ],
      [
          0,
          9
      ],
      [
          0,
          10
      ],
      [
          0,
          11
      ],
      [
          1,
          0
      ],
      [
          1,
          3
      ],
      [
          1,
          4
      ],
      [
          1,
          5
      ],
      [
          1,
          6
      ],
      [
          1,
          7
      ],
      [
          1,
          8
      ],
      [
          1,
          9
      ],
      [
          1,
          10
      ],
      [
          1,
          11
      ],
      [
          2,
          0
      ],
      [
          2,
          4
      ],
      [
          2,
          5
      ],
      [
          2,
          6
      ],
      [
          2,
          7
      ],
      [
          2,
          8
      ],
      [
          2,
          9
      ],
      [
          2,
          10
      ],
      [
          2,
          11
      ],
      [
          3,
          0
      ],
      [
          3,
          5
      ],
      [
          3,
          6
      ],
      [
          3,
          7
      ],
      [
          3,
          8
      ],
      [
          3,
          9
      ],
      [
          3,
          10
      ],
      [
          3,
          11
      ],
      [
          4,
          0
      ],
      [
          4,
          6
      ],
      [
          4,
          7
      ],
      [
          4,
          8
      ],
      [
          4,
          9
      ],
      [
          4,
          10
      ],
      [
          4,
          11
      ],
      [
          5,
          0
      ],
      [
          5,
          7
      ],
      [
          5,
          8
      ],
      [
          5,
          9
      ],
      [
          5,
          10
      ],
      [
          5,
          11
      ],
      [
          6,
          0
      ],
      [
          6,
          8
      ],
      [
          6,
          9
      ],
      [
          6,
          10
      ],
      [
          6,
          11
      ],
      [
          7,
          0
      ],
      [
          7,
          11
      ],
      [
          8,
          0
      ],
      [
          8,
          11
      ],
      [
          9,
          0
      ],
      [
          9,
          4
      ],
      [
          9,
          11
      ],
      [
          10,
          0
      ],
      [
          10,
          3
      ],
      [
          10,
          4
      ],
      [
          10,
          5
      ],
      [
          10,
          11
      ],
      [
          11,
          0
      ],
      [
          11,
          4
      ],
      [
          11,
          11
      ],
      [
          12,
          0
      ],
      [
          12,
          11
      ],
      [
          13,
          0
      ],
      [
          13,
          11
      ],
      [
          14,
          0
      ],
      [
          14,
          11
      ],
      [
          15,
          0
      ],
      [
          15,
          1
      ],
      [
          15,
          2
      ],
      [
          15,
          3
      ],
      [
          15,
          4
      ],
      [
          15,
          5
      ],
      [
          15,
          6
      ],
      [
          15,
          7
      ],
      [
          15,
          8
      ],
      [
          15,
          9
      ],
      [
          15,
          10
      ],
      [
          15,
          11
      ]
  ];

    const [vector, setVector] = useState('rightDown')

    const [currentPosition, setCurrentPosition] = useState();
    const [collision, setCollision] = useState(false);

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
    // function findXPositions(){
    //   for(let i = 0; i < board.length; i++){
    //     for(let j = 0; j < board[i].length; j++){
    //       if(board[i][j].includes('X')){
    //         borderPositions.push([i, j])
    //       }
    //     }
    //   }
    // }
    function run(){
      findCurrentPosition();
      changeCoordinates();
    }
    function randomVector(){
      const randomizeVector = ['rightDown', 'leftDown', 'leftTop', 'rightTop'];
      var myVector = randomizeVector[Math.floor(Math.random()*randomizeVector.length)];
      console.log(myVector)
      if(vector === 'rightDown'){
        return setVector(myVector);
      } else if(vector === 'leftDown'){
        return setVector('leftTop');
      } else if(vector === 'leftTop'){
        return setVector('rightTop');
      } else if(vector === 'rightTop'){
        return setVector('rightDown');
      }
    }


    // TO DO! Piłka uderza w kolizję i ogarnia to dopiero po 2 kolejnych ruchach
    // FIRST NUMBER IS Y, SECOND IS X !!!!!!!!!!!!!!!!!!!!!!!!!!!
    function changeCoordinates(){
      let newBoard = board;

      for(let i = 0; i < borderPositions.length; i++){
            if(currentPosition[1] === borderPositions[i][0] && currentPosition[0] === borderPositions[i][1]){
                setCollision(true);
            }
      }

      if(board[currentPosition[1]][currentPosition[0]] === '1' && vector === 'rightDown'){
        newBoard[currentPosition[1]][currentPosition[0]] = '0';
        newBoard[currentPosition[1] + 1][currentPosition[0] + 1] = '1';
        setBoard(newBoard)
        if(collision === true){
            randomVector();
            setCollision(false);
        }
      } else if(board[currentPosition[1]][currentPosition[0]] === '1' && vector === 'leftDown'){
        newBoard[currentPosition[1]][currentPosition[0]] = '0';
        newBoard[currentPosition[1] + 1][currentPosition[0] - 1] = '1';
        setBoard(newBoard)
        if(collision === true){
            randomVector();
            setCollision(false);
        }
      } else if(board[currentPosition[1]][currentPosition[0]] === '1' && vector === 'leftTop'){
        newBoard[currentPosition[1]][currentPosition[0]] = '0';
        newBoard[currentPosition[1] - 1][currentPosition[0] - 1] = '1';
        setBoard(newBoard)
        if(collision === true){
            randomVector();
            setCollision(false);
        }
      } else if(board[currentPosition[1]][currentPosition[0]] === '1' && vector === 'rightTop'){
        newBoard[currentPosition[1]][currentPosition[0]] = '0';
        newBoard[currentPosition[1] - 1][currentPosition[0] + 1] = '1';
        setBoard(newBoard)
        if(collision === true){
            randomVector();
            setCollision(false);
        }
      }
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
        <button onClick={randomVector}>CHANGE</button>
        <button onClick={run}>RUN</button>
        </>
      )
}