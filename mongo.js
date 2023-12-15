const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv").config()
const bodyParser = require('body-parser');

const app=express();



app.use(cors({
    origin: 'https://frontend-c1ep.onrender.com',
    credentials: true,
}));



const corsOptions={
    // origin:"https://frontend-c1ep.onrender.com/",
    // origin:"http://localhost:3000",
    methods:'GET, POST, PUT, DELETE',
    credentials:true,
    allowedHeaders:['Content-Type , Authorization'],

};
app.use(cors(corsOptions))
app.use(express.json())

app.use('/',require("./routes/authRoutes"))



const port=8000;
app.listen(port,()=>{console.log("server is running")})
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Monogdb Connected");
})
.catch(()=>{
    console.log("failure");
})


