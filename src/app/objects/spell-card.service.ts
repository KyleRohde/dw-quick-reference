export class SpellCard {
    name: string;
    description: string;
    tags: string[];

    constructor(data: any){
        this.name = data.name;
        this.description = data.description;
        this.tags = data.tags;
    }
}