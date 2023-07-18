import styled from 'styled-components';
import LogicalContainer from './LogicalContainer';

const Container = styled(LogicalContainer)`
    //mobile
    display: flex;
    width: calc(100% - 30px);
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    border: ${((props) => props.border)};
    max-width: 400px;
    padding: 10px;
    text-align: ${((props) => props.textAlign || 'center')};

    & h1, h3, h4, a {
        width: 100%;
    }


    //desktop
    @media screen and (min-width: 768px) {
        max-width: 700px;
        flex-direction: ${ (props) => props.direction || 'row'};
        height: 100%;

        & h1{
            margin-bottom: 16px;
        }

    }
`

export default Container;