import { useState } from "react";
import classNames from 'classnames';

import './Card.scss';

function Card({
    id,
    src,
}) {
  const [flipped, setFlipped] = useState(false);
  function FlipCard () {
    setFlipped(!flipped)
  }
  return (
    <div id={id} className={classNames("card", {'active-side' : flipped })} onClick={FlipCard} >
        <div className="card-front card-side"></div>
        <div className="card-back card-side">
            <img className="image_back-side" src={src} alt="" />
        </div>
    </div>
  );
}

export default Card;