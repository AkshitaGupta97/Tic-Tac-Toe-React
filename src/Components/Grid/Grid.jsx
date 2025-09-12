
import React, { useState } from 'react'
import Card from '../Card/Card';


function Grid({numberOfCards}) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(''));

  return (
    <div className='grid-card'>
        {
            board.map((ele, idx)=> {
                <Card key={idx}/>
            })
        }
    </div>
  )
}

export default Grid