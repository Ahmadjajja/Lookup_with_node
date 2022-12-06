import express, { Request, Response }  from "express";
const router = express.Router();
import Slots from "../models/slots";





router.get('/s', async (req: Request, res: Response) => {
    
    const slotsList:any = await Slots.aggregate(
        [
          {
            $lookup:{
              from : "doctors", 
              localField: "doctorId",
              foreignField: "_id",
              as: "doctorData"
            }
          }
        ]
        ).exec((err, result)=>{
            if (err) {
                console.log("error" ,err)
            }
            if (result) {
                console.log("result", result);
                return res.status(200).json(result);
            }
      });
    
    
    
})
export default router;
