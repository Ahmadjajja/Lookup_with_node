import express, { Request, Response }  from "express";
const router = express.Router();
import Booking from "../models/booking";





router.get('/b', async (req: Request, res: Response) => {
    
    const bookingList:any = await Booking.find();
    console.log("Booking",Booking);
    console.log("BookingList",bookingList);
    return res.status(200).send(`hello ahmad from booking api \n ${bookingList} `);
})
export default router;
