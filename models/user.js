const mongoose=require("mongoose")
const {Schema}=mongoose
const loginschema=new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const UserModel=mongoose.model('User',loginschema)
// User.createIndexes({name:1},{unique:true});
module.exports = UserModel
