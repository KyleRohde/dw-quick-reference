import { Component, Input } from '@angular/core';
import { MoveCard } from '../../objects/move-card.service';

@Component({
  selector: 'move-card',
  templateUrl: './move-card.component.html',
  styles: [`
    .card {
      margin: 8px;
      padding: 8px;
      height: 98%;
      border: 2px solid #000000;
      border-radius: 8px;
    }
    .type {
      margin-right: 8px;
      float: right;
      font-weight: bold;
      font-size: 1.2rem;
      text-align: right;
    }
  `]
})
export class MoveCardComponent {
  @Input()
  data: MoveCard | undefined;
}
