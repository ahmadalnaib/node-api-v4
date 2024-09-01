import jwt from 'jsonwebtoken';



export const createJWT=(user)=>{
  const token=jwt.sign({id:user.id,username:user.username},process.env.JWT_SECRET);
  return token;


}


export const verifyJWT=(req,res)=>{
  const bearer=req.headers.authorization;

  if(!bearer){
    return res.status(401).json('not authorized');
    
  }
  
}
