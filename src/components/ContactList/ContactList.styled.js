import styled from 'styled-components';

export const ContactListStyled = styled.ul`
    padding: 10px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    width: 560px ;
    height: 560px;
    overflow: auto;
`
export const ContactListElement= styled.li`
    display: flex;
    height: 80px;
    justify-content: space-between;
`
export const TextStyled = styled.p`
    color: #1976d2;
    font-weight: 500;
    font-size: 20px;
`
export const ButtonElement = styled.button`
    width: 100px;
        height: 50px;
        margin-left: 10px;
        border: 5px solid yellow;
        border-radius: 50%;
        background-color: red;
        color: gold;
        font-weight: 900;
        font-size: 16px;
`