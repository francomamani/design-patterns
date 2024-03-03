import { Command } from "./command.interface";
import { Receiver } from "./receiver";

export class OperateCommand implements Command {

    text: string;

    constructor(private receiver: Receiver, text: string) {
        this.text = text;
    }

    execute(): void {
        this.receiver.greeting(this.text);
    }

}