//Nível mais baixo
//Aqui estará as funções que fazem as queries para o banco de dados

//O model deve ser inportado para esse documento e ser usado na queries;
const Movie = require('../models/Movie')
//exemplos
//Função para objeter todos dados da coleção

const getAllMovies = async () => {
    try{
        const movies = await Movie.findById();
        return movies;
    }catch(err){
        console.error('Erro ao obter todos os documentos ' + err.message);
    }

}

module.exports = {
    getAllMovies
}


//Essas funções serão inportadadas na parta dos controllers