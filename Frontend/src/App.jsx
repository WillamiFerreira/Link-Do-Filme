import { BannerContainer } from './components/BannerContainer/BannerContainer';
import Container from './components/Container/Container';
import { Form } from './components/SearchForm/Form';


function App() {
  const bannerLink = 'https://upload.wikimedia.org/wikipedia/pt/3/33/Taxi_Driver_%281976_film_poster%29.jpg?20200907035951'
  return(
    <Container >
      <Form />
      <BannerContainer bannerLink={bannerLink} />
    </Container>
  
  );
}

export default App
