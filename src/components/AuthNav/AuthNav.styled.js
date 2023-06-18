import styled from 'styled-components';

import { NavLink as NavLinkComponent } from 'react-router-dom';

export const NavLinkStyled  = styled(NavLinkComponent)`
    margin-left: 10px;
    color: whitesmoke;
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    width: 100px;
`
export const ButtonReg = styled.button`
    width: 100px;
    height: 30px;
    background-color: red;
    margin-right: 10px;
    border: 2px solid yellow;
    border-radius: 5px; 
`
export const ButtonLog = styled.button`
    width: 100px;
    height: 30px;
    background-color: blue;
    border: 2px solid yellow;
    border-radius: 5px;
`