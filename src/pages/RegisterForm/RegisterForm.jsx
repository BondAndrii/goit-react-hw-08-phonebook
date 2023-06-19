import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

import {Input, Label, RegisterFormStyled, TextStyled} from "./RegisterForm.styled";
import { Button } from "@mui/material";


const RegisterForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function reset() {
        setName('');
        setEmail('');
        setPassword(''); 
    };

    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case "userName":
                setName(value);
                break;
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
        const data = { name, email, password };
          dispatch(register(data))
        reset(); 
    }

    return (
        <RegisterFormStyled onSubmit={handleSubmit}>
            <Label>
                <TextStyled>Username:</TextStyled>
                <Input
                   type="text"
                    name="userName"
                    value={name}
                    placeholder="enter your name"
                    onChange={handleChange}
                />
            </Label>
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
            <Button type="submit" variant="contained">Register</Button>
        </RegisterFormStyled>
    )
}

export default RegisterForm;