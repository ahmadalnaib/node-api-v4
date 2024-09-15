import * as user from '../user';

describe('user handler', () => {

  it('should create a new of user', async() => {
    // test code
    const req={body:{name:'toto',email:'al@gmail.co',password:'1234'}}
    const res={json({token}){
      expect(token).toBeDefined()
    }}

await user.createNewUser(req,res,()=>{

 })


  })

  })