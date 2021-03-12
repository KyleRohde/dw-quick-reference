import { Component, Input } from '@angular/core';
import { SpellCard } from '../../objects/spell-card.service';

@Component({
  selector: 'spell-card',
  templateUrl: './spell-card.component.html',
  styles: []
})
export class SpellCardComponent {
  @Input()
  data: SpellCard | undefined;
}
