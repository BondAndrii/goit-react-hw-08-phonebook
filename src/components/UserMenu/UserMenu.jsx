import { selectUser } from "redux/auth/selectors";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { logouter } from "redux/auth/operations";

const UserMenu = () => {
    const name = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogOut = () => dispatch(logouter())
    return (
        <div>
            <h2>Заголовок</h2>
            <p> welcome, {name}!</p>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}

export default UserMenu;