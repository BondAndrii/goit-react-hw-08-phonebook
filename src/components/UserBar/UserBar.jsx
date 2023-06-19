import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "redux/auth/selectors";

import AuthNav from "components/AuthNav/AuthNav";

import UserMenu from "components/UserMenu/UserMenu";

import Navigation from "components/Navigation/Navigation";

import { Header, LeftHalfHeader, RightHalfHeader } from "./UserBar.styled"

import { Typography } from "@mui/material";

const UserBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Header>
            <LeftHalfHeader>
                <Typography
                    variant="h2"
                >Phonebook</Typography>
                <Navigation />
            </LeftHalfHeader>
            < RightHalfHeader>
                {isLoggedIn ? <UserMenu/> : <AuthNav/>}               
            </RightHalfHeader>  
        </Header>
    )
}

export default UserBar;