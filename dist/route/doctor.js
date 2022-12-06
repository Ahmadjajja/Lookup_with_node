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
const doctor_1 = __importDefault(require("../models/doctor"));
router.get('/doc', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const DoctorList = yield doctor_1.default.find();
    console.log("Doctor", doctor_1.default);
    console.log("DoctorList", DoctorList);
    return res.status(200).send(`hello ahmad from doctor api \n ${DoctorList}`);
}));
router.post('/dPost', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let doctorData = new doctor_1.default({
        picture: req.body.picture,
        doctorName: req.body.doctorName,
        gender: req.body.gender,
        hospitalName: req.body.hospitalName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        about: req.body.about,
        registered: req.body.registered,
        qualification: req.body.qualification
    });
    doctorData = yield doctorData.save();
    console.log("doctorData \n", doctorData);
    if (!doctorData)
        return res.status(400).send('the doctorData cannot be created!');
    return res.send(doctorData);
}));
exports.default = router;
