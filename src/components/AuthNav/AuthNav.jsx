// import { NavLink } from 'react-router-dom';

// import styled from "./AuthNav.module.css"
import { ButtonLog, ButtonReg, NavLinkStyled } from './AuthNav.styled';

const AuthNav = () => {
    return (
        <div>
            <ButtonReg type='button'>
                <NavLinkStyled to='/register'>Register</NavLinkStyled>
            </ButtonReg>
            <ButtonLog type='button'>
                <NavLinkStyled to='/login'>LogIn</NavLinkStyled>
            </ButtonLog>
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

        </div>
    )
}

export default AuthNav;