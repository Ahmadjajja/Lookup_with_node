"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose');
const mongoose_1 = __importDefault(require("mongoose"));
const doctor_1 = __importDefault(require("./doctor"));
const slotsSchema = new mongoose_1.default.Schema({
    doctorId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: doctor_1.default,
        required: true
    },
    availability: {
        type: String,
        required: true,
    }
});
const Slots = mongoose_1.default.model('Slots', slotsSchema);
exports.default = Slots;
