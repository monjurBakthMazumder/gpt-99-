const mongoose=require("mongoose")
const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true," Name is required"]
    },
    email:{
        type:String,
        required:[true,"email  is required"]
    },
    keywords:{
        type:String,
        required:[true,"keywords is required"]
    },
    title:{
        type:String,
        required:[true,"title is required"]
    },
    blog:{
        type:String,
        required:[true,"blog is required"]
    },
})
const category= mongoose.model("category",categorySchema);
module.exports=category;