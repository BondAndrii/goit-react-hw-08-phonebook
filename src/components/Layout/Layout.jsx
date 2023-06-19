import { Outlet } from 'react-router-dom';

import UserBar from "../UserBar/UserBar"

import { AppBar, Container } from '@mui/material';

const Layout = () => {
    return (
        <Container  fixed >
            <AppBar   position='fixed'>            
                <UserBar/>              
            </AppBar>
             <Outlet />
        </Container>
    )
};

export default Layout;