import styled from 'styled-components';

function LogicalBannerContainer({className, bannerLink}){
    return (
        <div className={className}>
            <img src={bannerLink} alt="Movie Banner" />
        </div>
    )
}


export const BannerContainer = styled(LogicalBannerContainer)`
    //mobile
    max-width: 200px;

    & > img {
        display: block;
        width: 100%;
        height: auto;
    }


`


