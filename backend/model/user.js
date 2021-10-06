const{Schema, model}=require('mongoose')

const userSchema= new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
  
},{
    timestamps:true,
    versionkey:false
})

module.exports=model('User',userSchema,'Users')