import mongoose from 'mongoose';
import UrlSchema from './urlModal.js';


const connectDb= ()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/urlshortener', {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
      console.log("database connected successfully");
    }catch(error){
        console.log(error);
    }
}

export default connectDb;