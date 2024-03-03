"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyCommand = void 0;
var CopyCommand = /** @class */ (function () {
    function CopyCommand(text) {
        this.text = text;
    }
    CopyCommand.prototype.execute = function () {
        console.log("Copy class: ".concat(this.text));
    };
    return CopyCommand;
}());
exports.CopyCommand = CopyCommand;
