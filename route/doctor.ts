import express, { Request, Response }  from "express";
const router = express.Router();
import Doctor from "../models/doctor";





router.get('/doc', async (req: Request, res: Response) => {
    
    const DoctorList:any = await Doctor.find();
    console.log("Doctor",Doctor);
    console.log("DoctorList",DoctorList);
    return res.status(200).send(`hello ahmad from doctor api \n ${DoctorList}`);
    
})
router.post('/dPost', async (req: Request, res: Response) => {
    
    let doctorData = new Doctor({
        picture: req.body.picture,
        doctorName: req.body.doctorName,
        gender: req.body.gender,
        hospitalName: req.body.hospitalName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        about: req.body.about,
        registered: req.body.registered,
        qualification: req.body.qualification
    })

    doctorData = await doctorData.save(); 

    console.log("doctorData \n", doctorData);
    
    if(!doctorData)
    return res.status(400).send('the doctorData cannot be created!')

    return res.send(doctorData);  
})
export default router;
