import express from "express";

const app = express();

const Port = 3000;

app.get("/",(req,res)=>{
  res.send("Running server")
})
app.get("/test",(req,res)=>{
  res.send("test")
})

app.listen(Port,()=>{
  console.log(`Server running on port:${Port}`)
})