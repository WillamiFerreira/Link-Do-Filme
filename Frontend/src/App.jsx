import { BannerContainer } from './components/BannerContainer/BannerContainer';
import Container from './components/Container/Container';
import SearchFormStyled from './components/SearchForm/Style';

function App() {
  const bannerLink = 'https://upload.wikimedia.org/wikipedia/pt/3/33/Taxi_Driver_%281976_film_poster%29.jpg?20200907035951'
  return(
    <Container >
      <h2>Searcher and button here</h2>
      {/*<h3>Banner Here</h3>*/}
      <BannerContainer bannerLink={bannerLink} />
    </Container>
  
  );
}

export default App
