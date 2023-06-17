import { NavLink } from 'react-router-dom';

import styled from "./AuthNav.module.css"

const AuthNav = () => {
    return (
        <div>
            <button className={styled.ButtonReg} type='button'>
                <NavLink  className={styled.Text} to='/register'>
                    Register
                </NavLink>
            </button>
            {/* <NavLink className={styled.Text} to='/register'>
                Register
            </NavLink> */}
            <button className={styled.ButtonLog}>
                <NavLink  className={styled.Text} to='/login'>
                    LogIn
                </NavLink>
            </button>
            {/* <NavLink className={styled.Text} to='/login'>
                LogIn
            </NavLink> */}
        </div>
    )
}

export default AuthNav;