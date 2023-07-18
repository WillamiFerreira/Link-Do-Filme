import styled from 'styled-components';
import LogicalButton from "./LogicalButton";

export const Button = styled(LogicalButton)`
    display: flex;
    padding: 12px 16px;
    position: ${props => props.position};
    justify-content: center;
    margin: ${props => props.margin};
    align-items: center;
    border-radius: 12px;
    cursor: pointer;
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

