import express from 'express';
import cors from 'cors';

const app=express()
app.use(express.json())
app.use(cors())

const events=[]

app.post('/api/create-record',(req,res)=>{
    const event= req.body
    console.log(event)
    events.push(event)
    res.json({status:"ok"})
})

app.get('/api/get-record', (req,res)=>{
    res.json({events})
    console.log(`Send data from server while calling get:`, events);
})


app.listen(3002,()=>
console.log("server running in 3002"))