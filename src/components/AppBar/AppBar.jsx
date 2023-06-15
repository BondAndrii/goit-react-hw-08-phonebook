import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "redux/auth/selectors";

import AuthNav from "components/AuthNav/AuthNav";

import UserMenu from "components/UserMenu/UserMenu";

import Navigation from "components/Navigation/Navigation";


const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    // console.log("in App", isLoggedIn)

    return (
        <header>
            <h2>Phonebook</h2>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}

export default AppBar;