import { Outlet } from 'react-router-dom';

import UserBar from "../UserBar/UserBar"

import { AppBar, Container } from '@mui/material';

import { Suspense } from 'react';

import Loader from 'components/Loader/Loader';

const Layout = () => {
    return (
        <Container  fixed >
            <AppBar   position='fixed'>            
                <UserBar/>              
            </AppBar>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </Container>
    )
};

export default Layout;