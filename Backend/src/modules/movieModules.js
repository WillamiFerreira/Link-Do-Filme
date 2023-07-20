//Nível mais baixo
//Aqui estará as funções que fazem as queries para o banco de dados

//O model deve ser inportado para esse documento e ser usado na queries;
const Movie = require('../models/Movie')
//exemplos
//Função para objeter todos dados da coleção


const getRandomMovie = async () => {
    try{
        const randomMovie = await Movie.aggregate([{$sample:{size: 1}}])
        return randomMovie[0];
        
    }catch(err){
        res.status(500).json({message: err.message});
    }

}

const getMovieByTitle = async (movieTitle) => {
    try{
        // const movie = await Movie.findOne({$or: [{to_search_original_title: movieTitle},
        //                                           {to_search_portuguese_title: movieTitle}]}); //teste 
        const movie = await Movie.findOne({tags: movieTitle })
        return movie;

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getRandomMovie,
    getMovieByTitle
}

//Essas funções serão inportadadas na parta dos controllers