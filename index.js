const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/Auntifacation');


const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

//Все API routes
app.use("/api/auth".authRoute);


//Подключение к БД
mongoose.connect(process.env.MONGO_DB_URL,{
    useNewUrlParser:true,
    useUnifieldTopology:true
}).then(()=>{
    console.log("MongoDB Подключение в норме все ОК");
}).catch((err) =>{
    console.log(err.message);
})


const PORT = process.env.PORT || 9000;

app.listen(PORT,() =>{
    console.log(`Сервер поднят теперь ты Хакер ${PORT}`);
})