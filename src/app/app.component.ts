import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  move = {
    name: 'Hack and Slash',
    description: 'When you attack an enemy in melee',
    type: 'STR',
    good: 'On a 10+, you deal your damage to the enemy and avoid their attack. At your option, you may choose to do +1d6 damage but expose yourself to the enemy’s attack.',
    average: 'On a 7–9, you deal your damage to the enemy and the enemy makes an attack against you.'
  }
}
