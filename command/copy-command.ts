import { Command } from "./command.interface";

export class CopyCommand implements Command {

    text: string;

    constructor(text: string) {
        this.text = text;
    }

    execute(): void {
        console.log(`Copy class: ${this.text}`);
    }

}