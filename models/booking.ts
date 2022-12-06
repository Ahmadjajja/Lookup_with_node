// const mongoose = require('mongoose');
import mongoose from "mongoose";
import Slots from "./slots";
import Patient from "./patient";
import Doctor from "./doctor";


interface bookingSchemaTypes {
    patientId: mongoose.Types.ObjectId;
    doctorId: mongoose.Types.ObjectId;
    slotsId: mongoose.Types.ObjectId;
  }

const bookingSchema = new mongoose.Schema<bookingSchemaTypes>({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Patient,
        required:true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Doctor,
        required:true
    },
    slotsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Slots,
        required:true
    },
})


bookingSchema.set('toJSON', {
    virtuals: true,
});

const Booking = mongoose.model<bookingSchemaTypes>('Booking', bookingSchema);


export default Booking
