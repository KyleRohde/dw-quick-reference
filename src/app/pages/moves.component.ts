import { Component } from '@angular/core';

import { MoveCard } from '../objects/move-card.service';

import * as moveData from '../../assets/basicMoveData.json';

@Component({
    selector: 'moves-page',
    templateUrl: './moves.component.html',
    styles: [`
    move-card {
        margin: 8px;
        padding: 8px;
        border: 2px solid #000000;
        border-radius: 8px;
    }`]
})
export class MovesPage {
    moves: MoveCard[] = (moveData as any).default;
    movesVisible: boolean = false;

    toggleMoves() {
        this.movesVisible = !this.movesVisible;
    }
}