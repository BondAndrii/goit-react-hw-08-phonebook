// import { NavLink } from 'react-router-dom';

// import styled from "./AuthNav.module.css"
import { Box } from '@mui/material';
import {
    // ButtonLog, ButtonReg,
    NavLinkStyled
} from './AuthNav.styled';

import Button from '@mui/material/Button';

const AuthNav = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box mr={3}>
                <Button variant="contained">
                    <NavLinkStyled to='/register'>Register</NavLinkStyled>
                </Button>
            </Box>
            <Button color='secondary' variant="contained" >
                <NavLinkStyled to='/login'>LogIn</NavLinkStyled>
            </Button>
            {/* <ButtonReg type='button'>
                <NavLinkStyled to='/register'>Register</NavLinkStyled>
            </ButtonReg>
            <ButtonLog type='button'>
                <NavLinkStyled to='/login'>LogIn</NavLinkStyled>
            </ButtonLog> */}
            {/* <button className={styled.ButtonReg} type='button'>
                <NavLink  className={styled.Text} to='/register'>
                    Register
                </NavLink>
            </button>
            <button className={styled.ButtonLog}>
                <NavLink  className={styled.Text} to='/login'>
                    LogIn
                </NavLink>
            </button> */}

        </Box>
    )
}

export default AuthNav;