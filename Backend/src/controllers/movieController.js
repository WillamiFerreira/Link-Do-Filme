const movieModule = require('../modules/movieModules');

const getAllMovies = async (req, res) =>{
    const movies = await movieModule.getAllMovies()//método que faz querie
    res.send(movies)
}

module.exports = {  //essas funções são inportadas no router
    getAllMovies
}