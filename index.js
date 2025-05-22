import express from "express"
import ejs from "ejs"

const app=express();
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})