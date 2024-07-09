const mongoose=require('mongoose');
import UrlSchema from './urlModal';


const connectDb= ()=>{
    try{
      mongoose.connect('mongodb://localhost:27017/urlshortener',UrlSchema);
      console.log("database connected successfully");
    }catch(error){
        console.log(error);
    }
}

export default connectDb;