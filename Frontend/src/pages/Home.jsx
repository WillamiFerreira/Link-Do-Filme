import { BannerContainer } from "../components/BannerContainer/BannerContainer";
import Container from "../components/Container/Container";
import { Form } from "../components/SearchForm/Form";
import useMovieStore from "../stories";


function Home() {
    const {selectedMovie} = useMovieStore();
    return ( 
        <Container direction='column'>
        <Form />
        {selectedMovie && (
            <BannerContainer />
          )}
      </Container>
     );
}

export default Home;