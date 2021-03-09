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
      .entry {
        padding: 2px 8px 6px 8px;
      }
      .entry:hover {
        background: #dddddd;
      }
    `]
})
export class ClassesPage {
    classes: ClassCard[] = (classData as any).default;
    classDetails: string | undefined;
    detailsOpen: string | undefined;

    displayDetails(details: string[]){
      this.classDetails = details.join('');
      this.detailsOpen = "col-6";
    }

    constructor(){
      this.detailsOpen = "col-12";
    }
}