import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h1 {
      width: fit-content;
      margin: auto;
      cursor: pointer;
    }
    h1:hover {
      background-color: #eeeeee;
    }
    h2 {
      text-align: center;
      margin-bottom: 48px;
    }
  `]
})
export class AppComponent {
}
