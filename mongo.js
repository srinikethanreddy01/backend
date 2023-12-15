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

// app.use(bodyParser.json({ limit: '5mb' }));


const corsOptions={
    origin:"http://localhost:3000",
    methods:'GET, POST, PUT, DELETE',
    credentials:true,
    allowedHeaders:['Content-Type , Authorization'],

};
app.use(cors(corsOptions))
app.use(express.json())
// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin','http://localhost:3000');
//     res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
    

// })
app.use('/',require("./routes/authRoutes"))



const port=8000;
app.listen(port,()=>{console.log("server is running")})
mongoose.connect("mongodb+srv://srinikethanreddy01:nikki2004@cluster0.ryzscim.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=>{
    console.log("Monogdb Connected");
})
.catch(()=>{
    console.log("failure");
})


