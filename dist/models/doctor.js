"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose');
const mongoose_1 = __importDefault(require("mongoose"));
const doctorSchema = new mongoose_1.default.Schema({
    picture: {
        type: String,
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    hospitalName: {
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
});
// categorySchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });
// categorySchema.set('toJSON', {
//     virtuals: true,
// });
// exports.Doctor = mongoose.model('Doctor', doctorSchema);
const Doctor = mongoose_1.default.model('Doctor', doctorSchema);
exports.default = Doctor;
