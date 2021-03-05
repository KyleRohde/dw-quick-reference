import { Component, Input } from '@angular/core';
import { ClassCard } from '../../objects/class-card.service';

@Component({
  selector: 'class-card',
  templateUrl: './class-card.component.html'
})
export class ClassCardComponent {
  @Input()
  data: ClassCard | undefined;
}
