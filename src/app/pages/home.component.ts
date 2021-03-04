import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styles: [`
        .row {
            margin-bottom: 24px;
        }
        button {
            width: 70%;
            margin: auto;
            padding: 12px 0;
            font-size: 1.6rem;
            font-weight: bold;
        }
    `]
})
export class HomePage {
}