import styled from 'styled-components';
import useMovieStore from '../../stories';
import { Link } from 'react-router-dom';

function LogicalBannerContainer({className}){
    const {selectedMovie} = useMovieStore();
    return (
        <div className={className}>
            <Link to={`/${selectedMovie.title}`}><img src={selectedMovie.banner} alt="Movie Banner" /></Link>
        </div>
    )
}

export const BannerContainer = styled(LogicalBannerContainer)`
    //mobile
    max-width: 300px;

    & > a > img {
        display: block;
        width: 100%;
        height: auto;
    }


`


