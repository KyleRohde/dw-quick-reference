import { Component, Input } from '@angular/core';
import { MoveCard } from '../../objects/move-card.service';

@Component({
  selector: 'move-card',
  templateUrl: './move-card.component.html'
})
export class MoveCardComponent {
  @Input()
  data: MoveCard = new MoveCard({
    title: 'Move',
    description: 'Action',
    type: 'ATR',
    crit: {
      description: 'Flawless',
      options: []
    },
    success: {
      description: 'Complete',
      options: [
        "Get hit",
        "Reposition and deal less"
      ]
    }
  })
}
