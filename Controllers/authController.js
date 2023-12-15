
const User=require("../models/user")
const test=(req,res)=>{
    res.json("test is not working")
}

// const {hashPassword,comparePassword}=require("../helpers/auth")


const register=async (req,res)=>{
    try{
        const{name,email,password}=req.body;
        if(!name){
            return res.json({
                error:'name is required'
            })
        }
        if(!password || password.length<6){
            return res.json({
                error:'password must be atleat 6 characters'
            })
        }

        const exist=await User.findOne({email})
        if(exist){
            return res.json({
                error:"Invalid email"
            })
        }
        // const hashedPassword=await hashPassword(password)
        const user=await User.create({
            name,
            email,
            password
        })
        return res.json(user)

    }
    catch(error){
        console.log(error)

    }

}

// login endpoint
const login=async (req,res)=>{
    try {
        
        const {email,password}=req.body;
        console.log(email)
        const user=await User.findOne({email});
        if(!user){
            return res.json({
                error:'no user found'
            })
        }
        if(password==user.password){
            

           
            return res.json(user)
          
            
            
        }
        
        // const match=await comparePassword(password,user.password);
        // if(match){
        //     res.json('password match')

        // }
        else{
            return res.json({
                error:"password doesnot match"
            })
            
        }

        
        
    } catch (error) {
        console.log(error)
    }
    

}
// const predict=async(req,res)=>{
//     return res.json("predict")
// }

module.exports={
    test,register,login
}