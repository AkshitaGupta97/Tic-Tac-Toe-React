
import Icon from "../Icon/Icon";
import React from 'react'
import './card.css'
function Card({ player,gameEnd, onPlay, index }) {
  let icon = <Icon />

  if (player === 'X') {
    icon = <Icon name='cross' />
  }
  else if (player === 'O') {
    icon = <Icon name='circle' />
  }
  return (
    <div className="card" onClick={() => !gameEnd && player=="" && onPlay(index)}>  {/* !gameEnd && onPlay=> agar gameEnd true nehi hai toh onPlay execute nehi hoga, player=="" it means card ek barr hi clickable ho */}
      {icon}
    </div>
  )
}

export default Card