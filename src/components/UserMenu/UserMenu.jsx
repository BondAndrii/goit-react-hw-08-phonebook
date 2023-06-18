import { selectUser } from "redux/auth/selectors";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { logouter } from "redux/auth/operations";

// import styled from "./UserMenu.module.css"
import { ButtonLog, TextStyled, UserMenuStyled } from "./UserMenu.styled";

const UserMenu = () => {
    const name = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogOut = () => dispatch(logouter())
    return (
        <UserMenuStyled>
            <TextStyled> Welcome, {name}!</TextStyled>
            <ButtonLog onClick={handleLogOut}> Log Out</ButtonLog>
        </UserMenuStyled>
        // <div className={styled.UserMenu}>            
        //     <p className={styled.Text}> Welcome, {name}!</p>
        //     <button className={styled.ButtonLog} onClick={handleLogOut}>LogOut</button>
        // </div>
    )
}

export default UserMenu;