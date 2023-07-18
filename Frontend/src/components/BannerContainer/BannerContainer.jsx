import styled from 'styled-components';
import useMovieStore from '../../stories';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../Button/Button';

function LogicalBannerContainer({className}){

    const url = useLocation();
    console.log(url);
    const {selectedMovie} = useMovieStore();
    return (
        
        <div className={className}>
            {url.pathname != '/' && (
                
                <Button display='absolute' onClick={() => history.back()}>Voltar</Button>
                
            )}
            <Link to={`/${selectedMovie.title}`}><img src={selectedMovie.banner} alt="Movie Banner" /></Link>


            
        </div>
    )
}

export const BannerContainer = styled(LogicalBannerContainer)`
    //mobile
    
    width: 100%;

    & > a > img {
        display: block;
        width: 100%;
        height: auto;
    }

    @media (min-width: 768px) {
        width: 70%;
    }


`


