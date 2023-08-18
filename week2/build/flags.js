"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flag = exports.path = exports.args = void 0;
exports.args = process.argv.slice(2);
exports.path = exports.args[0];
exports.flag = exports.args[1];
