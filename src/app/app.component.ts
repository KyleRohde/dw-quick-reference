import { Component, Input } from '@angular/core';
import { ClassCard } from './objects/class-card.service';
import { MoveCard } from './objects/move-card.service';

import * as classData from '../assets/classData.json';
import * as moveData from '../assets/basicMoveData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classes: ClassCard[] = (classData as any).default;
  moves: MoveCard[] = (moveData as any).default;
  classesVisible: boolean = false;
  movesVisible: boolean = false;

  toggleClasses() {
    this.classesVisible = !this.classesVisible;
  }

  toggleMoves() {
    this.movesVisible = !this.movesVisible;
  }

  constructor(){
    console.log(this.classes, this.moves);
  }
}
