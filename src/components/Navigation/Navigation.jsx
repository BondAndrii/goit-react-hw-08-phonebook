
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "redux/auth/selectors";

import { NavLinkStyled, NavigationStyled } from "./Navigation.styled";

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (       
        <NavigationStyled>
            <NavLinkStyled to='/'> Home</NavLinkStyled>
            {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
        </NavigationStyled>
    )
}

export default Navigation;