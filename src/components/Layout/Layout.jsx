import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';

import styled from "./Layout.module.css"



const Layout = () => {
    return (
        <div className={styled.Container}>
            <AppBar />
            <Outlet />
        </div>
    )
};

export default Layout;