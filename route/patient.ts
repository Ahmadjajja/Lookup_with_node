import express, { Request, Response }  from "express";
const router = express.Router();
import Patient from "../models/patient";





router.get('/p', async (req: Request, res: Response) => {
    
    const patientList:any = await Patient.find();
    console.log("Patient",Patient);
    console.log("PatientList",patientList);
    return res.status(200).send(`hello ahmad from patient api \n ${patientList}`);
    
})
export default router;
