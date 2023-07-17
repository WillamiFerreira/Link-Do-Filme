import { useParams } from "react-router-dom";
import useMovieStore from "../stories";
import Container from "../components/Container/Container";
import { BannerContainer } from "../components/BannerContainer/BannerContainer";

function MoviePage() {
    const {selectedMovie} = useMovieStore();
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