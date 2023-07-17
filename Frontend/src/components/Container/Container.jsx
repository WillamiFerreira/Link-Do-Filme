import styled from 'styled-components';
import LogicalContainer from './LogicalContainer';

const Container = styled(LogicalContainer)`
    //mobile
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    max-width: 400px;
    padding: 10px;
    text-align: ${((props) => props.textAlign || 'center')};

    //desktop
    @media screen and (min-width: 768px) {
        border: 2px solid orange;
        width: 600px;
        flex-direction: ${ (props) => props.direction || 'row'};

    }
`

export default Container;