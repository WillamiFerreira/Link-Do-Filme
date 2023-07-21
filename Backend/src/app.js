//a conexão com o db deve ser feita aqui, portanto a importação do .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();
const publicDirectoryPath = path.join(__dirname, '../assets');
app.use(express.static(publicDirectoryPath));

app.use(cors());
app.use(express.json());

const movieRouters = require('./router')

app.use('/', movieRouters);

connect()
async function connect(){
    try{
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB');
    }catch(err){
        console.log(err.message);
    }
}
module.exports = app; //será importado em server.
