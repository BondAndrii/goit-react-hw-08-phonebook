import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "redux/auth/selectors";

import AuthNav from "components/AuthNav/AuthNav";

import UserMenu from "components/UserMenu/UserMenu";

import Navigation from "components/Navigation/Navigation";

import { Header, LeftHalfHeader, RightHalfHeader, Tittle } from "./AppBar.styled";

// import styled from "./AppBar.module.css"


const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
         < Header>
            <LeftHalfHeader>           
                <Tittle >Phonebook</Tittle>
                <Navigation />
            </LeftHalfHeader>          
            < RightHalfHeader>
                {isLoggedIn ? <UserMenu/> : <AuthNav/>}               
            </RightHalfHeader>            
        </ Header>
        // <header className={styled.Header}>
        //     <div className={styled.LeftHalfHeader}>
        //         <h1 className={styled.Tittle}>Phonebook</h1>
        //         <Navigation/>
        //     </div>
        //     <div className={styled.RightHalfHeader}>
        //         {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        //     </div>
            
        // </header>
    )
}

export default AppBar;