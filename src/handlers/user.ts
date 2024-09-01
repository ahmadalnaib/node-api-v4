import prisma from "../db";
import { createJWT, hashPassword,comparePasswords } from "../modules/auth";

export const createNewUser = async (req, res) => {
  const user=await prisma.user.create({
    data: {
      email: req.body.email,
      password:await hashPassword(req.body.password),
    },
  });

  const token=createJWT(user);
  res.json({ token });

};


export const signin=async(req,res)=>{
  const user=await prisma.user.findUnique({
    where:{
      email:req.body.email,
    },
  });

const isValid=await comparePasswords(req.body.password,user.password);
if(!isValid){
  return res.status(401).json('invalid password');
}

const token=createJWT(user);
res.json({token});


}