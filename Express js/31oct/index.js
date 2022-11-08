// console.log("Hey Virendra Good Morning !");
import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;


app.get("/",(req,res)=>{
    res.send("Hey Virendra Good Afternoon.....");
});

app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}.`);
});