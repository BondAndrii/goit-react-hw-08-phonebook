import { useState } from "react";

import { useDispatch } from "react-redux";

import { loginer } from "redux/auth/operations";
import {Input, Label, LoginFormStyled, TextStyled} from "./LoginForm.styled";
import { Button } from "@mui/material";

const LoginForm = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function reset() {
        setEmail('');
        setPassword(''); 
    };
    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    }
    const handleSubmit = event => {
        event.preventDefault();
        const data = { email, password };
        dispatch(loginer(data));
        reset(); 
    }
    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            <Label>
                <TextStyled>Email:</TextStyled>
                <Input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="enter your email"
                    onChange={handleChange}
                />
            </Label>
            <Label>
                <TextStyled>Password:</TextStyled>
                <Input type="password"
                    name="password"
                    value={password}
                    placeholder="remember your password"
                    onChange={handleChange}
                />
            </Label>
            <Button type="submit" variant="contained">Log in</Button>
        </LoginFormStyled>
    )
}

export default LoginForm;