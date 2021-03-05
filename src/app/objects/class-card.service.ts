export class ClassCard {
    title: string;
    health: number;
    damage: number;
    races: string[];

    constructor(data: any){
        this.title = data.title;
        this.health = data.health;
        this.damage = data.damage;
        this.races = data.races;
    }
}