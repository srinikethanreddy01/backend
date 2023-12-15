

const express=require("express")
const router=express.Router()
const cors=require("cors")
const {test} =require("../Controllers/authController")
const {register} =require("../Controllers/authController")
const {login} =require("../Controllers/authController")


router.use(
    cors({
        credentials:true,
        origin:'https://frontend-c1ep.onrender.com'
    })
)

router.get('/',test)
router.post('/SignUp',register);
router.post('/Login',login)
// router.post('/Predict',predict)


module.exports=router