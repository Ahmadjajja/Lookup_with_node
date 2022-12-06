// const mongoose = require('mongoose');
import mongoose from "mongoose";


interface doctorSchemaTypes {
    picture: string;
    doctorName: string;
    gender: string;
    hospitalName: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    registered: string;
  }

const doctorSchema = new mongoose.Schema<doctorSchemaTypes>({
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
})
// categorySchema.virtual('id').get(function () {
//     return this._id.toHexString();
// }); 

// categorySchema.set('toJSON', {
//     virtuals: true,
// });

// exports.Doctor = mongoose.model('Doctor', doctorSchema);

const Doctor = mongoose.model<doctorSchemaTypes>('Doctor', doctorSchema);


export default Doctor;