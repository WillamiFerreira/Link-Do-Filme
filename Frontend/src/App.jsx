import { BannerContainer } from './components/BannerContainer/BannerContainer';
import Container from './components/Container/Container';
import {Form} from './components/SearchForm/Form';
import useMovieStore from './stories';

function App() {
  const {selectedMovie} = useMovieStore();
  return(
    <Container >
      <Form />

      {
        selectedMovie && (
          <BannerContainer />
        )
      }
    </Container>
  
  );
}

export default App
