import express, { Request, Response }  from "express";
const router = express.Router();
import Booking from "../models/booking";





router.get('/b', async (req: Request, res: Response) => {
    
    const bookingList:any = await Booking.aggregate(
        [
          {
            $lookup:{
              from : "patients",
              localField: "patientId",
              foreignField: "_id",
              as: "patientData"
            }
            
          }  ,
          {$unwind:"$patientData"},
          {
            $lookup: {
              from: "doctors",
              localField: "doctorId",
              foreignField: "_id",
              as: "doctorData"
            }
          } , 
          {
            $lookup: {
              from: "slots",
              localField: "slotsId",
              foreignField: "_id",
              as: "slotsData"
            }
          }
        ]
        ).exec((err, result)=>{
            if (err) {
                console.log("error" ,err)
            }
            if (result) {
                return res.status(200).json(result);
            }
      });

})
export default router;
