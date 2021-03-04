export class Options {
    description: string;
    options: string[];

    constructor(data: any){
        this.description = data.description;
        this.options = data.options;
    }
}