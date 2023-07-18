import { useParams } from "react-router-dom";
import useMovieStore from "../stories";
import Container from "../components/Container/Container";
import { BannerContainer } from "../components/BannerContainer/BannerContainer";
import { useEffect } from 'react';
import axios from 'axios'


function MoviePage() {
    const {id} = useParams();
    const {selectedMovie, setSelectedMovie} = useMovieStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/?s=${id}`);
                setSelectedMovie(res.data)
            } catch (err) {
                console.log(err)
            }
            console.log(selectedMovie);
            
        };
        fetchData();
    }, []);

    return (
        <Container>
            <BannerContainer/>
            <Container direction='column' textAlign='left'>
                <h1>{selectedMovie.title}</h1>
                <h3>{selectedMovie.year}</h3>
                <h3>{selectedMovie.director}</h3>
                <h3>{selectedMovie.genrer}</h3>
                <h4>{selectedMovie.synopsis}</h4>
            </Container>
        </Container>
    );
}

export default MoviePage;