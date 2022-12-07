import express, { Request, Response }  from "express";
const router = express.Router();
import Booking from "../models/booking";

router.get('/b', async (req: Request, res: Response) => {   
    const bookingList:any = await Booking.aggregate(
        [
          // { $match : { patientId :"638b3634db25622c44f127af" } },   //will only return document that has given field value
          
          {
            $lookup:{
              from : "patients",
              localField: "patientId",
              foreignField: "_id",
              as: "patientData"
            }
          },
          {$unwind:"$patientData"},       // unwind work like spread operator 
          {
            $lookup: {
              from: "doctors",
              localField: "doctorId",
              foreignField: "_id",
              as: "doctorData"
            }
          } , 
          {$unwind:"$doctorData"},
          {
            $lookup: {
              from: "slots",
              localField: "slotsId",
              foreignField: "_id",
              as: "slotsData"
            }
          },
          {$unwind:"$slotsData"},
          {$addFields:{day: "wednesday"}} ,
          // { $limit : 1 }    // This will return the first specified elements(objects)
          // { $group : { patientId :"$slotsData" } }   // why error occuring
          { $group : { _id : '$patientId', totaldocs : { $sum : 1 } } }
          // { $project : { _id : 1, patientId: 0, doctorId: 0, slotsId: 0 } }, // using for getting required fields
          // { $count : 'total_documents' }    //This will return only the total documents in the previous stage
        ]
        ).exec((err, result)=>{
            if (err) {
                console.log("error" ,err)
            }
            if (result) {
                return res.status(200).json(result);
            }
      })
})
export default router;
