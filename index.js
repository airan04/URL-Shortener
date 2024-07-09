import UrlSchema from "./urlModal.js";
import connectDb from "./database.js";

import express from 'express';
import shortid from 'shortid';

const app=express();
app.use(express.json());
connectDb();
app.post('/shorten',async(req,res)=>{
    const {originalUrl}= req.body;
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
        res.json({error:'Url not found'});
    }
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'));