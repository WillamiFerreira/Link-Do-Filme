//a conexão com o db deve ser feita aqui, portanto a importação do .env
//os routes devem ser usados aqui
const router = require('./router');

const express = require('express');

const app = express();

module.exports = app; //será importado em server.
