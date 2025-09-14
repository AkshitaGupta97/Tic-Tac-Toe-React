
import React, { useState } from 'react'
import Card from '../Card/Card';
import './grid.css'
import checkWinners from '../../Helper/checkWinners';

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(''));
    const [turn, setTurn] = useState(true) // true = 0, flase = X
    const [winner, setWinner] = useState(null)

    function play(index) {
        if (turn === true) {
            board[index] = 'O'
        }
        else {
            board[index] = 'X'
        }
        const win = checkWinners(board, turn ? 'O' : 'X');
        if (win) {
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn)
    }

    function reset() {
        setTurn(true);
        setWinner(null)
        setBoard(Array(numberOfCards).fill(''))
    }
    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className='winner'>Winner is : <span>{winner}</span></h1>
                        <button className='reset' onClick={reset}>Reset Game</button>
                    </>
                )
            }
            <h2 className='turn-highlight'>Current turn : <span id='turn'> {(turn) ? 'O' : 'X'}</span></h2>
            <div className='grid-card'>
                {
                    board.map((ele, idx) => (
                        <Card key={idx} gameEnd={winner ? true: false} onPlay={play} player={ele} index={idx} />
                    ))
                }
            </div>
        </div>
    )
}

export default Grid