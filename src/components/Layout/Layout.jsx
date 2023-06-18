import { Outlet } from 'react-router-dom';

import UserBar from "../UserBar/UserBar"

// import styled from "./Layout.module.css"
// import { Container } from './Layout.styled';
import { AppBar, Container } from '@mui/material';
// import { makeStyles } from '@mui/material';

// const useStyles = makeStyles(() => ({
//     root: {
//         flexGrow: 1,
//     },
// }))
const Layout = () => {
    // const classes = useStyles();
    return (
        <Container  fixed >
            <AppBar   position='fixed'>            
                <UserBar/>              
            </AppBar>
             <Outlet />
        </Container>
        // <div className={styled.Container}>
        //     <AppBar />
        //     <Outlet />
        // </div>
    )
};

export default Layout;