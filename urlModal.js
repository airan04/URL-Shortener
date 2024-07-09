const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url:{type: String},
    shortUrl:{type:String},
})

const UrlSchema= mongoose.model('url',urlSchema);

export default UrlSchema;