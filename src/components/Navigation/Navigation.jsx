
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "redux/auth/selectors";

// import styled from "./Navigation.module.css"
import { NavLinkStyled, NavigationStyled } from "./Navigation.styled";

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (       
        <NavigationStyled>
            <NavLinkStyled to='/'> Home</NavLinkStyled>
            {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
        </NavigationStyled>
        // <nav className={styled.Navigation}>
        //     <NavLink className={styled.Text} to='/'>
        //         Home
        //     </NavLink>
        //     {isLoggedIn && 
        //         <NavLink className={styled.Text} to="/contacts">
        //             Contacts
        //         </NavLink>
        //     }
        // </nav> 
    )
}

export default Navigation;