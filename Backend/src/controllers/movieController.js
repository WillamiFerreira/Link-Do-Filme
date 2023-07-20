const movieModule = require('../modules/movieModules');

const getAllgetByTitleMovie = async (req, res) =>{
    //verificano de há query params
    if (Object.keys(req.query).length === 0){
        //Se não houver parammetros
        const randomMovie = await movieModule.getRandomMovie()//método que faz querie
        res.send(randomMovie)
    }else {
        const title = req.query.s
        const lowerTitle = title.toLowerCase() //Convertendo para lowercase
        const noAccentsLowerTitle = lowerTitle.normalize('NFD').replace(/[\u0300-\u036f]/g, "");//retirando os acentos
        const noAccentsLowerTitleFinal = noAccentsLowerTitle.replace(/\+/g, " ")//trocando os "+" por espaço vazio;

        const movie = await movieModule.getMovieByTitle(noAccentsLowerTitleFinal);
        res.send(movie);
        //res.send(noAccentsLowerTitleFinal);

    }
}
module.exports = {  //essas funções são inportadas no router
    getAllgetByTitleMovie,
    //getMovieByTitle
}