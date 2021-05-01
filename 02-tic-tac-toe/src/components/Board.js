import React from 'react';
import Square from './Square';

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({board, onClick}) => (
    <div style={style}>
        {board.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
        {/* <Square value="1" onClick={() => onClick("dummy")} />
        <Square value="2" onClick={() => onClick("dummy")} />
        <Square value="3" onClick={() => onClick("dummy")} />
        <Square value="4" onClick={() => onClick("dummy")} />

        <Square value="5" onClick={() => onClick("dummy")} />
        <Square value="6" onClick={() => onClick("dummy")} />
        <Square value="7" onClick={() => onClick("dummy")} />
        <Square value="8" onClick={() => onClick("dummy")} />
        <Square value="9" onClick={() => onClick("dummy")} /> */}

    </div>
)

export default Board;