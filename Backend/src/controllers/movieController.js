const movieModule = require('../modules/movieModules');

const getAllMovies = (req, res) =>{
    const movies = movieModule.getAllMovies()//método que faz querie
    res.send(movies)
}

module.exports = {  //essas funções são inportadas no router
    getAllMovies
}