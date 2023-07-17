import styled from 'styled-components';
import SearchForm from './Index';

const SearchFormStyled = styled(SearchForm)`
    display: flex;
    background-color: red;
    flex-direction: ${props => props.direction};
`

export default SearchFormStyled;