import { Component, Input } from '@angular/core';
import { MoveCard } from '../../objects/move-card.service';

@Component({
  selector: 'move-card',
  templateUrl: './move-card.component.html',
  styles: [`
    .card {
      margin: 8px;
      padding: 8px;
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
    .card > button {
      border: 0px;
      background-color: #fff;
    }
    .card > button p {
      font-weight: bold;
      border-bottom: 1px solid #000;
      line-height: 0.1em;
    }
    .card > button span {
      background:#fff;
      padding:0 10px;
    }
  `]
})
export class MoveCardComponent {
  @Input()
  data: MoveCard | undefined;
  detailsOpen: boolean = false;

  toggleDetails(){
    this.detailsOpen = !this.detailsOpen;
  }
}
