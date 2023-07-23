import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { BannerContainer }from "../components/BannerContainer/BannerContainer";
import Container from "../components/Container/Container";
import { Form } from "../components/SearchForm/Form";
import useMovieStore from "../stories";
import CircularProgress from '@mui/material/CircularProgress';
import { HomeBtn } from "../components/Button/Button";
import { useState } from "react";


function Home() {
    const [isPressed, setIsPressed] = useState(false);
    const {selectedMovie} = useMovieStore();
    const location = useLocation();
    const navigate = useNavigate();
    //console.log(location)
    //console.log(selectedMovie)

    const handlePress = () => {
        setIsPressed(true);
        //console.log('entrou')
      };

    const handleRelease = () => {
        setIsPressed(false);
        //console.log('saiu')
      };

    function handleNavigation(){
        navigate('/')
    }


    
    return ( 
        <Container direction='column'  width='100%' minHeight='100vh' padding='10px' >
            <Container flexGrow='0' direction='row' jfContent='space-between' alItens="center" gap="0 2vw" padding='0 4px' >
                {
                    location.search 
                    ? <HomeBtn 
                        onClick={handleNavigation}
                        onMouseDown={handlePress}
                        onMouseUp={handleRelease}
                        onTouchStart={handlePress}
                        onTouchEnd={handleRelease}
                        pressed={isPressed}
                        >home</HomeBtn>
                    : ''
                    
                }
                <Form />
            </Container>
        {
            selectedMovie  ? <BannerContainer width='50%' isMovieSelected={selectedMovie} margin='12px 0 0 0' /> : <Container height='475px' jfContent='center' alItens='center'><CircularProgress /></Container>
        }

       
      </Container>
     );
}

export default Home;