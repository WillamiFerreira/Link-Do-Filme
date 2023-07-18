import styled from 'styled-components';
import LogicalButton from "./LogicalButton";

export const Button = styled(LogicalButton)`
    display: flex;
    position: ${((props) => props.display)};
    width: 40px;
    height: 40px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin: 4px;
`;

export const LinkBtn = styled(Button)`
    //padding: 4px px;
    width: 70px;
    height: 40px;

    background-color: #afd2f1;

    & {
        font-weight: 500;
        text-decoration: none;
    }

    &:hover{
        background-color: #e3f2ff;
    }

`

