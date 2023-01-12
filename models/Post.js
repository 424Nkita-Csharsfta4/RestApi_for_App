const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({

    userId:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        max:100,
    },
    img:{
        type:String
       
    },
    likes:{
        type:Array,
        default:[]
    }
},{timestamps:true})

module.exports = mongoose.model("Отправка",PostSchema);