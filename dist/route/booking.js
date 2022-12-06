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
const booking_1 = __importDefault(require("../models/booking"));
router.get('/b', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingList = yield booking_1.default.aggregate([
        {
            $lookup: {
                from: "patients",
                localField: "patientId",
                foreignField: "_id",
                as: "patientData"
            }
        },
        { $unwind: "$patientData" },
        {
            $lookup: {
                from: "doctors",
                localField: "doctorId",
                foreignField: "_id",
                as: "doctorData"
            }
        },
        {
            $lookup: {
                from: "slots",
                localField: "slotsId",
                foreignField: "_id",
                as: "slotsData"
            }
        }
    ]).exec((err, result) => {
        if (err) {
            console.log("error", err);
        }
        if (result) {
            return res.status(200).json(result);
        }
    });
}));
exports.default = router;
