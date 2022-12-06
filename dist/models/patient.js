"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const patientSchema = new mongoose_1.default.Schema({
    picture: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    eyeColor: {
        type: String,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    registered: {
        type: String,
        required: true,
    },
    diseases: {
        type: String,
        required: true,
    },
});
// categorySchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });
// categorySchema.set('toJSON', {
//     virtuals: true,
// });
// exports.Patient = mongoose.model('Patient', patientSchema);
const Patient = mongoose_1.default.model('Patient', patientSchema);
exports.default = Patient;
