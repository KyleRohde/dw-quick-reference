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
    let toEmit = [];
    toEmit.push("<h2>- " + this.data?.title + " -</h2>");
    for(let elem of this.data?.details ?? []){
      toEmit.push(elem);
    }
    this.detailEvent.emit(toEmit);
  }
}
