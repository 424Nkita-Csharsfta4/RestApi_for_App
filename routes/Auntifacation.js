const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')

//Регистрация API
router.post("/register",async(req,res)=>{
    try{
        //Генирация пароля
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
         
        //Создание нового пользователя
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
        })
         const user = await newUser.save();

         res.status(200).json({
            'message':'Акаунт успешно создан',
            'user':user,
         });
    }
    catch(err){
        res.status(500).json(err)
    }
})