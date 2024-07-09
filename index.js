import UrlSchema from "./urlModal";
import connectDb from "./database";

const express=require('express');
const shortid = require('shortid');

const app=express();

app.post('/shorten',async(req,res)=>{
    const { originalUrl }= req.body;
    const shortUrl = shortid.generate();
    const url = new UrlSchema({ originalUrl, shortUrl });
    await url.save();
    res.json({ originalUrl, shortUrl: `http://localhost:3000/${shortUrl}` });
});

app.get('/:shortUrl',async(req,res)=>{
    const { shortUrl }= req.params;
    const url= await UrlSchema.findOne({shortUrl});

    if(url){
        res.redirect(url.originalUrl);
    }else{
        res.statusCode(500).json({error:'Url not found'});
    }
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'));