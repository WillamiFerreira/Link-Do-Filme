import { BannerContainer } from './components/BannerContainer/BannerContainer';
import Container from './components/Container/Container';
//import SearchFormStyled from './components/SearchForm/Style';
import {Form} from './components/SearchForm/Form';

function App() {
  return(
    <Container >
      <Form />
      <BannerContainer />
    </Container>
  
  );
}

export default App
