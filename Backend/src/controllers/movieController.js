const movieModule = require('../modules/movieModules');

const getAllgetByTitleMovie = async (req, res) =>{
    //verificano de há query params
    if (Object.keys(req.query).length === 0){
        //Se não houver parammetros
        const movies = await movieModule.getAllMovies()//método que faz querie
        res.send(movies)
    }else {
        const title = req.query.s
        const lowerTitle = title.toLowerCase() //Convertendo para lowercase
        const noAccentsLowerTitle = lowerTitle.normalize('NFD').replace(/[\u0300-\u036f]/g, "");//retirando os acentos

        const movie = await movieModule.getMovieByTitle(noAccentsLowerTitle);
        res.send(movie);
        //res.send(noAccentsLowerTitle);

    }

}

module.exports = {  //essas funções são inportadas no router
    getAllgetByTitleMovie,
    //getMovieByTitle
}