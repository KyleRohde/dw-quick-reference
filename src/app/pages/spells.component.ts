import { Component } from '@angular/core';

import { SpellCard } from '../objects/spell-card.service';

import * as spellData from '../../assets/clericSpellData.json';

@Component({
    selector: 'spells-page',
    templateUrl: './spells.component.html',
    styles: []
})
export class SpellsPage {
    spells: SpellCard[] = (spellData as any).default;
    filteredSpellList: SpellCard[] = [];
    filterString: string = "";

    constructor(){
        this.filteredSpellList = this.spells;
    }

    filterChange(value: string){
        let val = value.toLowerCase();

        if(val === ""){
            this.filteredSpellList = this.spells;
        } else {
            let newSpellList: SpellCard[] = [];
            
            for(let spell of this.spells){
                let toAdd = spell.name.toLowerCase().includes(val);

                if(!toAdd) {
                    toAdd = spell.description.toLowerCase().includes(val);
                }
                
                if(!toAdd){
                    let containsTag = spell.tags.filter((tag) => {return tag.toLowerCase().includes(val)}).length;
                    if(containsTag){
                        toAdd = true;
                    }
                }

                if(toAdd){
                    newSpellList.push(spell);
                }
            }

            this.filteredSpellList = newSpellList;
        }
    }
}