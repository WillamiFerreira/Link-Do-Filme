import styled from 'styled-components';
import useMovieStore from '../../stories';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../Button/Button';

function LogicalBannerContainer({className}){

    const url = useLocation();
    //console.log(url);
    const {selectedMovie} = useMovieStore();
    return (
        
        <div className={className}>
            {url.pathname != '/' && (
                
                <Button display='absolute' onClick={() => history.back()} margin='4px' position='absolute' >Voltar</Button>
                
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
    //Desktop
    @media (min-width: 768px) {
        & > a > img {
        display: block;
        width: 100%;
        width: ${props => props.width};
        height: auto;

        & {
            margin: 0 auto;
        }

    }
    }


`


