import express, { Request, Response }  from "express";
const router = express.Router();
import Slots from "../models/slots";





router.get('/s', async (req: Request, res: Response) => {
    
    const slotsList:any = await Slots.find();
    console.log("Slots",Slots);
    console.log("slotsList",slotsList);
    return res.status(200).send(`hello ahmad from slots api `);
    
})
export default router;
