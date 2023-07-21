import styled from 'styled-components';
import LogicalContainer from './LogicalContainer';

const Container = styled(LogicalContainer)`

    //mobile
    display: flex;
    width: ${(props => props.width)};
    flex-direction: column;
    height: ${((props) => props.height)};
    align-items: ${(props => props.alItens)};
    justify-content: ${(props => props.jfContent)};

    border: ${((props) => props.border)};
    max-width: 576px;
    padding: ${((props) => props.padding || '0px')};
    text-align: ${((props) => props.textAlign || 'center')};

    & h1, h3, h4, a {
        width: 100%;
    }


    //desktop
    @media screen and (min-width: 768px) {
        max-width: 600px;
        flex-direction: ${(props) => props.direction || 'row'};



        & h1{
            margin-bottom: 16px;
        }

    }
`

export default Container;