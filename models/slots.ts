// const mongoose = require('mongoose');
import mongoose from "mongoose";
import Doctor from "./doctor"

interface slotsSchemaTypes {
    doctorId: mongoose.Types.ObjectId;
    availability: string;
  }

const slotsSchema = new mongoose.Schema<slotsSchemaTypes>({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Doctor,
        required:true
    },
    availability: {
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

// exports.Slots = mongoose.model('Slots', slotsSchema);

const Slots = mongoose.model<slotsSchemaTypes>('Slots', slotsSchema);


export default Slots;
