import { Command } from "./command.interface";

export class Invoker {
    list: Array<Command>;

    constructor() {
        this.list = [];
    }

    public addCommand(command: Command) {
        this.list.push(command);
    }

    public run() {
        this.list.forEach(command => command.execute());
    }
}