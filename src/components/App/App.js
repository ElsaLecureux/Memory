import { useState } from "react";

import './App.scss';

import Card from "../Card/Card"
import cards from "../../data/cards"

function App() {
  const fist_randomCards = cards.sort((a, b) => 0.5 - Math.random());
  const [flipped, setFlipped] = useState(false);
  function FlipCard () {
    setFlipped(!flipped)
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Jeu de Memory</h1>
      </header>
      <main className="App-main">
        <div className="cards_board">
        {fist_randomCards.map((card) => (
          <Card 
          key={card.id}
          FlipCard={FlipCard}
          {...card}
          />
          
          ))}
        </div>
      </main>
     
    </div>
  );
}

export default App;
