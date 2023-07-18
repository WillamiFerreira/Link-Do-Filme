import { BannerContainer }from "../components/BannerContainer/BannerContainer";
import Container from "../components/Container/Container";
import { Form } from "../components/SearchForm/Form";
import useMovieStore from "../stories";
import { useLocation } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


function Home() {
    const url = useLocation();
    console.log(url);
    const {selectedMovie} = useMovieStore();
    
    return ( 
        <Container direction='column' border='2px solid black'>
        <Form />
        {
            selectedMovie ? <BannerContainer /> : <CircularProgress />
        }
      </Container>
     );
}

export default Home;