import { Component } from '@angular/core';

import { MoveCard } from '../objects/move-card.service';

import * as moveData from '../../assets/basicMoveData.json';

@Component({
    selector: 'moves-page',
    templateUrl: './moves.component.html',
    styles: []
})
export class MovesPage {
    moves: MoveCard[] = [];
    movesVisible: boolean = false;

    toggleMoves(value: any) {
        if(value === 1){
            this.moves = (moveData as any).default;
            this.movesVisible = true;
        }
    }
}