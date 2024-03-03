import { Command } from "./command.interface";
import { Receiver } from "./receiver";

export class ConcreteCommand implements Command {

    text: string;

    constructor(private receiver: Receiver, text: string) {
        this.text = text;
    }

    execute(): void {
        const response = this.receiver.method1(this.text);
        console.info(response);
    }
}