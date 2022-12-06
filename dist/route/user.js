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
const User = {
    email: 'ahmadjajja86@gmail.com',
    password: 'Ahmad786'
};
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const user = (req.body.email == User.email) && User;
    if (!user) {
        return res.status(400).send('The user not found');
    }
    if (user.email == req.body.email && user.password == req.body.password) {
        return res.status(200).send(`${User.email} logged in successfully!`);
    }
    else if (user.password != req.body.password) {
        return res.status(400).send('password is wrong!');
    }
    else {
        return res.status(401).send('something went wrong!');
    }
}));
exports.default = router;
