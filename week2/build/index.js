"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs/promises"));
const flags_1 = require("./flags");
const flags_2 = require("./flags");
const flags_3 = require("./flags");
const rle_1 = require("./rle");
(() => __awaiter(void 0, void 0, void 0, function* () {
    if (!flags_2.path || !flags_3.flag) {
        console.log("Debe proporcionar un nombre de archivo.");
        process.exit(1);
    }
    try {
        const data = yield fs.readFile(flags_2.path, "utf8");
        let result;
        if (flags_3.flag === "cf") {
            result = rle_1.RLE.encode(data);
        }
        else if (flags_3.flag === "ucf") {
            result = rle_1.RLE.decode(data);
        }
        else {
            console.log("Bandera no reconocida.");
            process.exit(1);
        }
        yield fs.writeFile(flags_1.newPath, result, "utf8");
        console.log("Operación completada exitosamente.");
    }
    catch (err) {
        console.error("Error:", err);
    }
}))();
