import { BannerContainer }from "../components/BannerContainer/BannerContainer";
import Container from "../components/Container/Container";
import { Form } from "../components/SearchForm/Form";
import useMovieStore from "../stories";
import CircularProgress from '@mui/material/CircularProgress';


function Home() {
    const {selectedMovie} = useMovieStore();
    
    return ( 
        <Container direction='column' border='2px solid black' width='100%' padding='10px'>
        <Form />
        {
            selectedMovie ? <BannerContainer width='50%' /> : <Container height='475px' jfContent='center' alItens='center'><CircularProgress /></Container>
        }
      </Container>
     );
}

export default Home;