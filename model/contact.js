const mongoose=require('mongoose');
const contactschema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,

    }

})
const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact