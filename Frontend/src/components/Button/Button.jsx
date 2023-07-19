import styled, {css} from 'styled-components';
import LogicalButton from "./LogicalButton";

export const Button = styled(LogicalButton)`
    display: flex;
    padding: 12px 16px;
    position: ${props => props.position};
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin};
    border-radius: 12px;
    cursor: pointer;
    color: white;
    font-weight: 600;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), linear-gradient(171deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.10) 100%);
    box-shadow: 3px 3px 6px -1px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2.5px);

    ${(props) => 
        props.pressed &&
        css`
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(171deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.42) 100%);
            backdrop-filter: blur(3.5px);

        `    
    }

    

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

