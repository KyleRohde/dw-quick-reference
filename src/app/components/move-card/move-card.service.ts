export class MoveCard {
    title: string;
    description: string;
    type: string;
    crit: string;
    success: string;

    constructor(data: any) {
        this.title = data.title;
        this.description = data.description;
        this.type = data.type;
        this.crit = data.crit;
        this.success = data.success;
    }
}