import { ConcreteCommand } from "./command";
import { Invoker } from "./invoker";
import { Receiver } from "./receiver";

const invoker = new Invoker();
const receiver = new Receiver();
invoker.addCommand(new ConcreteCommand(receiver, 'Franco'));
invoker.addCommand(new ConcreteCommand(receiver, 'Jesus'));
invoker.run();