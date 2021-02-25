import { Component, Input } from '@angular/core';

@Component({
  selector: 'move-card',
  templateUrl: './move-card.component.html'/*,
  styleUrls: ['./move-card.component.css']*/
})
export class MoveCardComponent {
    _data!: object;

    @Input() ('data')
    set data(data: object) {
        this._data = data || {};
    }
}6
