export class ClassCard {
    title: string;
    health: number;
    damage: number;

    constructor(data: any){
        this.title = data.title;
        this.health = data.health;
        this.damage = data.damage;
    }
}