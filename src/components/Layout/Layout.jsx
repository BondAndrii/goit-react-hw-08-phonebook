import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';

// import styled from "./Layout.module.css"
import { Container } from './Layout.styled';



const Layout = () => {
    return (
        <Container>
            <AppBar />
            <Outlet />
        </Container>
        // <div className={styled.Container}>
        //     <AppBar />
        //     <Outlet />
        // </div>
    )
};

export default Layout;