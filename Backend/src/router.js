//Importar os controlers
const movieController = require('./controllers/movieController');

const express = require('express');

const router = express.Router();

//rota comentada, por enquanto
//router.get('/', movieController.getMovieByTitle)//recebe um query paramn sendo o nome do filme pesquisado

router.get('/', movieController.getAllgetByTitleMovie)//home //obs.: rota que retornará todos os documento por enquanto.

module.exports = router; //importar em app.js