import express, { Request, Response }  from "express";
const router = express.Router();
import Doctor from "../models/doctor";





router.get('/d', async (req: Request, res: Response) => {
    
    const DoctorList:any = await Doctor.find();
    console.log("Doctor",Doctor);
    console.log("DoctorList",DoctorList);
    return res.status(200).send(`hello ahmad from doctor api`);
    
})
export default router;
