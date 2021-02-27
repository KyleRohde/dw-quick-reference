import { Component, Input } from '@angular/core';
import { ClassCard } from './components/class-card/class-card.service';
import { MoveCard } from './components/move-card/move-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classes: ClassCard[] = [
    new ClassCard({
      title: 'Barbarian',
      health: 8,
      damage: 10
    }),
    new ClassCard({
      title: 'Bard',
      health: 6,
      damage: 6
    })
  ]

  moves: MoveCard[] = [
    new MoveCard({
      title: 'Hack and Slash',
      description: 'When you attack an enemy in melee',
      type: 'STR',
      crit: 'On a 10+, you deal your damage to the enemy and avoid their attack. At your option, you may choose to do +1d6 damage but expose yourself to the enemy’s attack.',
      success: 'On a 7–9, you deal your damage to the enemy and the enemy makes an attack against you.'
    })
  ]

  classesVisible: boolean = false;
  movesVisible: boolean = false;

  toggleClasses() {
    this.classesVisible = !this.classesVisible;
  }

  toggleMoves() {
    this.movesVisible = !this.movesVisible;
  }
}
