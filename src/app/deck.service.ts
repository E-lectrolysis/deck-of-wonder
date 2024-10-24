import { Injectable } from '@angular/core';
import { Deck } from './deck';
import { Card } from './deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  deck:Deck;
  drawnCards:Card[];

  constructor() {
    this.deck=new Deck();
    this.drawnCards= [];
    console.log(this.deck);
  }

  /**
   * draws random cards from the deck
   * @param amount number of cards to draw
   * @returns drawn cards
   */
  public draw(amount:number) {
    console.log("service: drawing " + amount);
    let deckCards:Card[] = this.deck.getCards();
    console.log(deckCards);
    let drawn:Card[] = [];
    for(let i:number = 0; i < amount; ++i) {
      drawn.push(deckCards[Math.floor(Math.random()*deckCards.length)]);
    }
    this.drawnCards = drawn;
  }

  public getDrawnCards():Card[] {
    return this.drawnCards;
  }


}
