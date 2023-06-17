import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "redux/auth/selectors";

import styled from "./Navigation.module.css"

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (       
        <nav>
            <NavLink className={styled.Text} to='/'>
                Home
            </NavLink>
            {isLoggedIn && 
                <NavLink className={styled.Text} to="/contacts">
                    Contacts
                </NavLink>
            }
            </nav> 
    )
}

export default Navigation;