import { Outlet } from "react-router-dom";
import { BannerContainer }from "../components/BannerContainer/BannerContainer";
import Container from "../components/Container/Container";
import { Form } from "../components/SearchForm/Form";
import useMovieStore from "../stories";
import CircularProgress from '@mui/material/CircularProgress';


function Home() {
    const {selectedMovie} = useMovieStore();
    console.log(selectedMovie)
    
    return ( 
        <Container direction='column'  width='100%' minHeight='100vh' padding='10px'>
        <Form />

        {
            selectedMovie  ? <BannerContainer width='50%' isMovieSelected={selectedMovie} margin='12px 0 0 0' /> : <Container height='475px' jfContent='center' alItens='center'><CircularProgress /></Container>
        }

       
      </Container>
     );
}

export default Home;