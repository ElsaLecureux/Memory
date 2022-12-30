import { useState } from "react";
import classNames from 'classnames';

import './App.scss';

import frog from "./frog.jpg"

function App() {
  const [flipped, setFlipped] = useState(false);
  function FlipCard () {
    console.log('clicked')
    setFlipped(!flipped)
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Jeu de Memory</h1>
      </header>
      <main>
        <div className="cards_board">
          <div className={classNames("card", {'active-side' : flipped })} onClick={FlipCard} >
            <div className="card-front card-side"></div>
            <div className="card-back card-side">
              <img className="image_back-side" src={frog} alt="" />
            </div>
          </div>
        </div>
      </main>
     
    </div>
  );
}

export default App;
