import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const comparePasswords=(password,hash)=>{
  return bcrypt.compare(password,hash);


}

export const hashPassword=(password)=>{
  return bcrypt.hash(password,5);

}



export const createJWT=(user)=>{
  const token=jwt.sign({id:user.id,email:user.email},process.env.JWT_SECRET);
  return token;


}


export const verifyJWT=(req,res,next)=>{
  const bearer=req.headers.authorization;

  if(!bearer){
    return res.status(401).json('not authorized');
    }

  const[,token]=bearer.split(' ');

  if(!token){
    return res.status(401).json('not valid token');
    }

    try{
      const user=jwt.verify(token,process.env.JWT_SECRET);
      req.user=user;
      next();

    }catch(e){
      return res.status(401).json('not valid token');

    }
  
}
