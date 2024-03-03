"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperateCommand = void 0;
var OperateCommand = /** @class */ (function () {
    function OperateCommand(receiver, text) {
        this.receiver = receiver;
        this.text = text;
    }
    OperateCommand.prototype.execute = function () {
        this.receiver.greeting(this.text);
    };
    return OperateCommand;
}());
exports.OperateCommand = OperateCommand;
