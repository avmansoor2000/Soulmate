const User = require('../models/userSchema')

const userLogin = (req,res)=>{
    const {email,password} = req.body

    const user = User.findOne(email)
    if(!user){
        return res.status(404).json('user not availeble')
    }else{
    }
}