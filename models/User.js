const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min: 3,
        max: 10,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        min: 3,
        max: 30,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String,
        max:100
    },
    city:{
        type:String,
        max:30
    },
    from:{
        type:String,
        max:30
    },
    relacation:{
        type:Number,
        enum:[1,2,3],
    },
},
{
   timestamps:true
},)

module.exports = mongoose.model("Пользователь",UserSchema);

