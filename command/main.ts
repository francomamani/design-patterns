import { CopyCommand } from "./copy-command";
import { Invoker } from "./invoker";
import { OperateCommand } from "./operate-command";
import { Receiver } from "./receiver";

const copy  = new CopyCommand('Franco Mamani');
const receiver = new Receiver();
const operate = new OperateCommand(receiver, 'Alizon Luna');

const invoker = new Invoker();
invoker.addCommand(copy);
invoker.addCommand(operate);
invoker.addCommand(operate);
invoker.run()
