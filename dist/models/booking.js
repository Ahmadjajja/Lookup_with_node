"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const slots_1 = __importDefault(require("./slots"));
const patient_1 = __importDefault(require("./patient"));
const doctor_1 = __importDefault(require("./doctor"));
const bookingSchema = new mongoose_1.default.Schema({
    patientId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: patient_1.default,
        required: true
    },
    doctorId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: doctor_1.default,
        required: true
    },
    slotsId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: slots_1.default,
        required: true
    },
});
const Booking = mongoose_1.default.model('Booking', bookingSchema);
exports.default = Booking;
