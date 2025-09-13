
import React, { useState } from 'react'
import Card from '../Card/Card';
import './grid.css'

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(''));
    const [turn, setTurn] = useState(true) // true = 0, flase = X
    
    return (
        <div className="grid-wrapper">
            <h2 className='turn-highlight'>Current turn : <span id='turn'> {(turn) ? 'O': 'X'}</span></h2>
            <div className='grid-card'>
                {
                    board.map((ele, idx) => (
                        <Card key={idx} />
                    ))
                }
            </div>
        </div>
    )
}

export default Grid