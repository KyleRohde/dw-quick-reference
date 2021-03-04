import { Options } from "./options.service";

export class MoveCard {
    title: string;
    description: string;
    type: string;
    crit: Options;
    success: Options;

    constructor(data: any) {
        this.title = data.title;
        this.description = data.description;
        this.type = data.type;
        this.crit = data.crit;
        this.success = data.success;
    }
}