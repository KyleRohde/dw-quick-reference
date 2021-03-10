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
        padding: 2px 0 6px 8px;
        margin-left: -8px;
      }
      .entry:hover {
        background: #dddddd;
        cursor: pointer;
      }
    `]
})
export class ClassesPage {
    classes: ClassCard[] = (classData as any).default;
    classDetails: string | undefined;
    detailsOpen: string = "details col-12";

    displayDetails(details: string[]){
      this.classDetails = details.join('');
      this.detailsOpen = "details col-6";
    }

    closeDetails(){
      this.classDetails = "";
      this.detailsOpen = "details col-12";
    }
}