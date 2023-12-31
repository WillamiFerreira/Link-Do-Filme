import styled from 'styled-components';
import LogicalContainer from './LogicalContainer';

const Container = styled(LogicalContainer)`

    //mobile
    display: ${(props => props.display|| "flex")};
    width: ${(props => props.width)};
    height: ${((props) => props.height)};
    min-height: ${(props => props.minHeight)};
    flex-direction: ${(props) => props.direction || "column"};
    align-items: ${(props => props.alItens)};
    justify-content: ${(props => props.jfContent)};

    //border: ${((props) => props.border)};
    max-width: 576px;
    padding: ${((props) => props.padding || '0px')};
    text-align: ${((props) => props.textAlign || 'center')};
    flex-grow: ${((props) => props.flexGrow || 1)};
    gap: ${((props) => props.gap || 0)};
    font-size: clamp(16px, 3vw, 24px);

    background-color: #1A1A1A;
    color: #FFFFFF;

    & h1, h3, h4, a {
        width: 100%;
    }
    & h1{
        border-bottom: 1px solid white;

    }


    //desktop
    @media screen and (min-width: 768px) {
        max-width: 900px;
        min-height: 0% !important;
        height: 500px !important;
        flex-direction: ${(props) => props.direction || 'row'};
        gap: 0px;
        flex-grow: 0;
        max-height: 100% !important;
        overflow: hidden;
        //border: 3px solid grey;
        border-radius: 12px;

        & h1{
            margin-bottom: 16px;
            font-size: 32px;
        }

        & p{
            font-size: 21px;
        }

    }
`

export default Container;