import styled from 'styled-components';

export const FormStyled = styled.form`
    margin-left: 50px;
    width: 560px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* align-items: center; */
    background-color: white;
    border: 3px solid #1976d2;
    border-radius: 20px;
`
export const Label = styled.label`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Input = styled.input`
    width: 400px;
    height: 30px;
    margin-right: 20px;
`
export const ButtonStyled = styled.button`
    margin-top: 20px;
    width: 100px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border: 5px solid yellowgreen;
    border-radius: 50%;
    background-color: green;
    color: yellowgreen;
    font-weight: 900;
    font-size: 16px ;
`
export const TextStyled = styled.p`
    margin-left: 20px;
    color: #1976d2;
    font-weight: 500;
    font-size: 20px;
`