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
        <Container border='2px solid black'>
            <BannerContainer/>
            <Container direction='column' textAlign='left' border='1px solid red'>  
                <h1>{selectedMovie.portuguese_title}</h1>
                <h3>{selectedMovie.title}</h3>
                <h3>{selectedMovie.director}</h3>
                <h3>{selectedMovie.year}</h3>
                <h3>{selectedMovie.genrer}</h3>
                <p>{selectedMovie.synopsis}</p>
                <a href={selectedMovie.link1} target="_blanck"><LinkBtn>Link 1</LinkBtn></a>
            </Container>
        </Container>
    );
}

export default MoviePage;