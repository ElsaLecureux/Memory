import { useState } from "react";
import classNames from 'classnames';

import './App.scss';

import frog from "./frog.jpg"

function App() {
  //TODO revoir le state; utiliser classNames pour ajouter une class sur l'élément à flip, (s'inspirer du zen-mode du blog E07)
  const [flipped, setFlipped] = useState(false);
  function FlipCard () {
    setFlipped(!flipped);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Jeux de Memory</h1>
      </header>
      <main>
        <div className="cards_board">
          <div className={classNames("card", {'' : flipped })} onClick={FlipCard} >
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
