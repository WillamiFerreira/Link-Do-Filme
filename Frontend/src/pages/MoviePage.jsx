import { useParams } from "react-router-dom";
import useMovieStore from "../stories";
import Container from "../components/Container/Container";
import { BannerContainer } from "../components/BannerContainer/BannerContainer";
import { useEffect } from 'react';
import axios from 'axios'
import { Button, LinkBtn } from "../components/Button/Button";


function MoviePage() {
    const {id} = useParams();
    const {selectedMovie, setSelectedMovie} = useMovieStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://api-link-do-filme.onrender.com/?s=${id}`);
                //const res = await axios.get(`http://localhost:3000/?s=${id}`);
                
                setSelectedMovie(res.data)
            } catch (err) {
                console.log(err)
            }
            //console.log(selectedMovie);
            
        };
        fetchData();
    }, []);

    return (
        <Container minHeight='100vh'>
            {
                selectedMovie != undefined ? 
                <>
                <BannerContainer width='100%'/>

                <Container direction='column' textAlign='left' border='' width='100%'  padding='10px' height='100%' flexGrow='1' jfContent='space-between' >
                    <Container  border='' textAlign='left' gap='8px 0px' >
                        <h1>{selectedMovie.portuguese_title}</h1>
                        <h4>{selectedMovie.title}</h4>
                        <h4>{selectedMovie.director}</h4>
                        <h4>{selectedMovie.year}</h4>
                        <h4>{selectedMovie.genrer}</h4>
                        <p>{selectedMovie.synopsis}</p>
                    </Container>
                    <a href={selectedMovie.link1} target="_blanck"><LinkBtn margin="6px 0 0 0" >Link 1</LinkBtn></a>
                </Container>
                </>
                :
                <CircularProgress />

            }
           
        </Container>
    );
}

export default MoviePage;