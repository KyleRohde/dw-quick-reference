import { Component } from '@angular/core';

import { MoveCard } from '../objects/move-card.service';

import * as basicMoveData from '../../assets/basicMoveData.json';

import * as specialMoveData from '../../assets/specialMoveData.json';

@Component({
    selector: 'moves-page',
    templateUrl: './moves.component.html',
    styles: []
})
export class MovesPage {
    moves: MoveCard[] = [];
    movesVisible: number = 0;

    toggleMoves(value: any) {
        this.movesVisible = value;

        if(value === 1){
            this.moves = (basicMoveData as any).default;
        } else if(value === 2){
            this.moves = (specialMoveData as any).default;
        } else {
            this.moves = [];
        }
    }
}