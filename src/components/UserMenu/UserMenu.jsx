import { selectUser } from "redux/auth/selectors";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { logouter } from "redux/auth/operations";

import {
    TextStyled, UserMenuStyled
} from "./UserMenu.styled";
import { Button } from "@mui/material";

const UserMenu = () => {
    const name = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogOut = () => dispatch(logouter())
    return (
        <UserMenuStyled>
            <TextStyled> Welcome, {name}!</TextStyled>
            <Button
                color='secondary' variant="contained"
                onClick={handleLogOut}>Log Out</Button>
        </UserMenuStyled>
    )
}

export default UserMenu;