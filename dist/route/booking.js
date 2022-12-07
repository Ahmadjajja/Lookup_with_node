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
        // { $match : { patientId :"638b3634db25622c44f127af" } },   //will only return document that has given field value
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
        { $unwind: "$doctorData" },
        {
            $lookup: {
                from: "slots",
                localField: "slotsId",
                foreignField: "_id",
                as: "slotsData"
            }
        },
        { $unwind: "$slotsData" },
        { $addFields: { day: "wednesday" } },
        // { $limit : 1 }    // This will return the first specified elements(objects)
        // { $group : { patientId :"$slotsData" } }   // why error occuring
        { $group: { _id: '$patientId', totaldocs: { $sum: 1 } } }
        // { $project : { _id : 1, patientId: 0, doctorId: 0, slotsId: 0 } }, // using for getting required fields
        // { $count : 'total_documents' }    //This will return only the total documents in the previous stage
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
