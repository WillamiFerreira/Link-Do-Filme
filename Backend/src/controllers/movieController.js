const movieModule = require('../modules/movieModules');

const getAllgetByTitleMovie = async (req, res) =>{
    //verificano de há query params
    if (Object.keys(req.query).length === 0){
        //Se não houver parammetros
        const movies = await movieModule.getAllMovies()//método que faz querie
        res.send(movies)
    }else {
        const movie = await movieModule.getMovieByTitle(req.query.s);
        res.send(movie);

    }

}

// const getMovieByTitle = async (req, res) =>{
    
// }

module.exports = {  //essas funções são inportadas no router
    getAllgetByTitleMovie,
    //getMovieByTitle
}