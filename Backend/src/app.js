//a conexão com o db deve ser feita aqui, portanto a importação do .env
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');

const app = express();
app.use(express.json());

//os routes devem ser usados aqui

