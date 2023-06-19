import { Box } from '@mui/material';
import {NavLinkStyled} from './AuthNav.styled';

import Button from '@mui/material/Button';

const AuthNav = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box mr={3}>
                <Button variant="contained">
                    <NavLinkStyled to='/register'>Register</NavLinkStyled>
                </Button>
            </Box>
            <Button color='secondary' variant="contained" >
                <NavLinkStyled to='/login'>LogIn</NavLinkStyled>
            </Button>
        </Box>
    )
}

export default AuthNav;