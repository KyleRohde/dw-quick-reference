import { Component } from '@angular/core';

import { ClassCard } from '../objects/class-card.service';

import * as classData from '../../assets/classData.json';

@Component({
    selector: 'classes-page',
    templateUrl: './classes.component.html'
})
export class ClassesPage {
    classes: ClassCard[] = (classData as any).default;
    classesVisible: boolean = false;
  
    toggleClasses() {
      this.classesVisible = !this.classesVisible;
    }
}