import {useState} from 'react';
import './ttt.css'

function Board() {
  return (
    <div className='main'>
      
    <div className="board-row">
    <Square/>
    <Square/>
    <Square/>
    </div>
    
    <div className="board-row">
    <Square/>
    <Square/>
    <Square/>
    </div>
    
    <div className="board-row">
    <Square/>
    <Square/>
    <Square/>
    </div>
    </div>
  );
}

function Square(){
const [value, setValue] = useState(null)

function handleClick(){
  setValue('X');
}

  return <button onClick={handleClick} className="square">{value}</button>
}

export default Board;
