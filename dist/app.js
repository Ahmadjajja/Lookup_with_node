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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
require("dotenv/config");
const user_1 = __importDefault(require("./route/user"));
const booking_1 = __importDefault(require("./route/booking"));
const doctor_1 = __importDefault(require("./route/doctor"));
const patient_1 = __importDefault(require("./route/patient"));
const slots_1 = __importDefault(require("./route/slots"));
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.options("*", (0, cors_1.default)());
//middleware
/* The above code is using the express.json() method to parse the incoming request bodies in a
middleware before your handlers, available under the req.body property. */
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
//Routes
app.use("/api/v1/user", user_1.default);
app.use("/api/v1/booking", booking_1.default);
app.use("/api/v1/doctor", doctor_1.default);
app.use("/api/v1/patient", patient_1.default);
app.use("/api/v1/slots", slots_1.default);
//base route
app.get("/", (req, res) => {
    res.send("Ahmad Responding from HTTP Server");
    console.log('====================================');
    console.log('Ahmad this api is working');
    console.log('====================================');
});
//Database
mongoose_1.default
    .connect("mongodb+srv://ahmadjajja86:ahmadjajja86@cluster0.ua4hncd.mongodb.net/Testing?retryWrites=true&w=majority")
    .then(() => {
    console.log("Database Connection is ready...");
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
})
    .catch((err) => {
    // throw createHttpError(501, "Unable to connect to database");
    console.log(err);
});
