const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
let user=models.User;

app.post('/login',async (req,res)=>{
    let response=await user.findOne({
        where:{nome:req.body.nome , senha:req.body.senha}
    });
    if(response===null){
        res.send(JSON.stringify('erro'));
    }else{
        res.send(response);
    }
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('foi');
});

