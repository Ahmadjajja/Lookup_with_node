"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const slots_1 = __importDefault(require("../models/slots"));
router.get('/s', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const slotsList = yield slots_1.default.find({ availability: "04:00 to 06:00 PM" });
    console.log("Slots", slots_1.default);
    console.log("slotsList", slotsList);
    return res.status(200).send(`hello ahmad from slots api \n ${slotsList} `);
}));
exports.default = router;
