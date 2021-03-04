import { Component, Input } from '@angular/core';
import { ClassCard } from '../../objects/class-card.service';

@Component({
  selector: 'class-card',
  templateUrl: './class-card.component.html'
})
export class ClassCardComponent {
  @Input()
  data: ClassCard = new ClassCard({
    title: 'Class',
    health: 0,
    damage: 0
  });
}
