//Importar os controlers
const movieController = require('./controllers/movieController');

const express = require('express');

const router = express.Router();

router.get('/', movieController.getAllMovies)//home //obs.: rota que retornará todos os documento por enquanto.

//rota comentada, por enquanto
//router.get('/:id')//recebe um query paramn sendo o nome do filme pesquisado


module.exports = router; //importar em app.js