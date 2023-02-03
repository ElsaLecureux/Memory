import { useState, useEffect } from "react";
import classNames from 'classnames';

import './Card.scss';

function Card({
    active,
    index,
    id,
    src,
    name,
    handleClick,
}) 


{
  const [Flipped, setFlipped] = useState(false);
      /*if (cardsWon ) {
        setFlipped(true);
      }*/
  

  return (
    <div id={id} className={classNames("card", {'active-side' : active })} onClick={e => handleClick(index)} >
        <div className="card-front card-side"></div>
        <div className="card-back card-side">
            <img className="image_back-side" src={src} alt="" />
        </div>
    </div>
  );
}

export default Card;