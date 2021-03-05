import { Component } from '@angular/core';

import { ClassCard } from '../objects/class-card.service';

import * as classData from '../../assets/classData.json';

@Component({
    selector: 'classes-page',
    templateUrl: './classes.component.html',
    styles: [`
      .header > div {
        font-weight: bold;
        border-bottom: 1px solid #000000;
      }
      class-card {
        margin-bottom: 8px;
      }
    `]
})
export class ClassesPage {
    classes: ClassCard[] = (classData as any).default;
    classesVisible: boolean = false;
  
    toggleClasses() {
      this.classesVisible = !this.classesVisible;
    }
}