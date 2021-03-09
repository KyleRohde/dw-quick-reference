import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClassCard } from '../../objects/class-card.service';

@Component({
  selector: 'class-card',
  templateUrl: './class-card.component.html'
})
export class ClassCardComponent {
  @Input()
  data: ClassCard | undefined;

  @Output()
  detailEvent = new EventEmitter<string[]>();

  selectDetails(){
    this.detailEvent.emit(this.data?.details);
  }
}
