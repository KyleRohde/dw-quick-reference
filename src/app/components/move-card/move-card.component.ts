import { Component, Input } from '@angular/core';
import { MoveCard } from './move-card.service';

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
    crit: 'Flawless',
    success: 'Complete'
  })
}
