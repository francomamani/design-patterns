import { Command } from "./command.interface";

export class Invoker {
    private commands: Command[];

    constructor() {
        this.commands = [];
    }

    public addCommand(command: Command) {   
        this.commands.push(command);
    }

    public run() {
        for(const command of this.commands) {
            command.execute();
        }
    }
}