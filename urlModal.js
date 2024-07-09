import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    originalUrl:{type: String},
    shortUrl:{type:String},
})

const UrlSchema= mongoose.model('url',urlSchema);

export default UrlSchema;