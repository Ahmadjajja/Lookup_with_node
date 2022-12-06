import express, { Express, Request, Response } from 'express';
import cors from "cors"; 
import morgan from "morgan";
import mongoose from 'mongoose';
// import mongojs from "mongojs"
import {MongoClient, ServerApiVersion} from "mongodb"
import * as dotenv from 'dotenv';
import 'dotenv/config';
import userRoute from './route/user';
import bookingRoute from "./route/booking"
import doctorRoute from "./route/doctor"
import patientRoute from "./route/patient"
import slotsRoute from "./route/slots"
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.options("*", cors());
//middleware
/* The above code is using the express.json() method to parse the incoming request bodies in a
middleware before your handlers, available under the req.body property. */
app.use(express.json());
app.use(morgan("tiny"));


//Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/doctor", doctorRoute);
app.use("/api/v1/patient", patientRoute);
app.use("/api/v1/slots", slotsRoute);

//base route
app.get("/", (req: Request, res: Response) => {
  res.send("Ahmad Responding from HTTP Server");
  console.log('====================================');
  console.log('Ahmad this api is working');
  console.log('====================================');
});





// console.log("working")
// var db = mongojs.connect("mongodb+srv://ahmadjajja86:ahmadjajja86@cluster0.ua4hncd.mongodb.net/?retryWrites=true&w=majority", collections);

//Database
mongoose
  .connect("mongodb+srv://ahmadjajja86:ahmadjajja86@cluster0.ua4hncd.mongodb.net/?retryWrites=true&w=majority", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: "Testing",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});