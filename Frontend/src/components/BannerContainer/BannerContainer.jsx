import styled from 'styled-components';
import useMovieStore from '../../stories';

function LogicalBannerContainer({className}){
    const {selectedMovie} = useMovieStore();
    return (
        <div className={className}>
            <img src={selectedMovie.banner} alt="Movie Banner" />
        </div>
    )
}

export const BannerContainer = styled(LogicalBannerContainer)`
    //mobile
    max-width: 300px;

    & > img {
        display: block;
        width: 100%;
        height: auto;
    }


`


