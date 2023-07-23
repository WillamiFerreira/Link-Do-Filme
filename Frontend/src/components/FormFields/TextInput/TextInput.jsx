import styled from 'styled-components';
import LogicalTextInput from "./LogicalTextInput";

export  const TextInput = styled(LogicalTextInput)`
    border: 1px solid black;
    padding: 2px;
    font-size: 18px;
    font-weight:500;
    border-radius: 12px;

    &:focus {
        outline: none;
    }
`