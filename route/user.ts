import express, { Request, Response }  from "express";
const router = express.Router();

interface User {
    email: string,
    password: string
  }

const User:User = {
    email: 'ahmadjajja86@gmail.com',
    password: 'Ahmad786'
}



router.post('/login', async (req: Request, res: Response) => {
    console.log(req.body);

    const user = (req.body.email == User.email) && User;

    if(!user) {
        return res.status(400).send('The user not found');
    }

    if (user.email == req.body.email && user.password == req.body.password) {

        return res.status(200).send(`${User.email} logged in successfully!`);

    } else if (user.password != req.body.password){

        return res.status(400).send('password is wrong!');

    } else {

        return res.status(401).send('something went wrong!');
    }   
})
export default router;
