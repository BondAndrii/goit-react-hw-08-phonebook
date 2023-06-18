import styled from 'styled-components';

import { NavLink as NavLinkComponent } from 'react-router-dom';

export const NavLinkStyled  = styled(NavLinkComponent)`
    margin-left: 10px;
    color: green;
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
`
export const NavigationStyled = styled.nav`
    display: flex;
    align-items: center;
`