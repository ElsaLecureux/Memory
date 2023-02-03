import { useState,useEffect } from "react";

import './App.scss';

import Card from "../Card/Card"
import cards from "../../data/cards"

function App() {
  const [randomCards, setRandomCards] = useState([]);
  
  useEffect(() => {
    setRandomCards(
     cards.sort((a, b) => 0.5 - Math.random())
    );
  }, [setRandomCards])

  //fin de partie
  /*useEffect(() => {
    
  }, [setRandomCards])*/
  const [cardsFlipped, setCardsFlipped] = useState([]);
  const [cardsWon, setCardsWon] = useState([]);
  function handleClick (card_index) {
    const nextCardsFlipped = [card_index];

    if (cardsFlipped.length === 2) {
      if (randomCards[cardsFlipped[0]].name === randomCards[cardsFlipped[1]].name){
        setCardsWon([
          ...cardsWon,
          cardsFlipped[0],
          cardsFlipped[1],
        ]);

        if (cardsWon.length + 2 >= randomCards.length) {
          //gagné
        }
      } else {
        //perdre une vie
      }
    } else if (cardsFlipped.length < 2) {
      nextCardsFlipped.push(...cardsFlipped);
    }
    setCardsFlipped(nextCardsFlipped);
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Jeu de Memory</h1>
      </header>
      <main className="App-main">
        <div className="cards_board">
        {randomCards.map((card, i) => (
          <Card
            key={card.id}
            {...card}
            index = {i}
            handleClick = {handleClick}
            active = {cardsFlipped.includes(i) || cardsWon.includes(i)}
          />
          
          ))}
        </div>
      </main>
     
    </div>
  );
}

export default App;
