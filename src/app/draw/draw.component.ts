import { Component } from '@angular/core';
import { DeckService } from '../deck.service';
import { Card } from '../deck';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.css'
})
export class DrawComponent {

  drawnCards?: Card[];
  ngOnInit(): void {
    this.getDrawnCards();
  }
  constructor(private deckService: DeckService) {
    
  }

  public draw(amount:number) {
    console.log("component: drawing " + amount);
    this.deckService.draw(amount);
    this.getDrawnCards();
  }

  public getDrawnCards(): void {
    this.drawnCards = this.deckService.getDrawnCards();
  } 
}
