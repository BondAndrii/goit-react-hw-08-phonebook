import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "redux/auth/selectors";

import AuthNav from "components/AuthNav/AuthNav";

import UserMenu from "components/UserMenu/UserMenu";


const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log("in App", isLoggedIn)

    return (
        <header>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}

export default AppBar;