import { useState } from "react";

import { useDispatch } from "react-redux";

import { loginer } from "redux/auth/operations";

import styled from "./LoginForm.module.css"

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
        // console.log("in change", value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        const data = { email, password };
        dispatch(loginer(data));
        // console.log("сабміт ін логін", data);
        reset(); 
    }
    return (
        <form className={styled.LoginForm} onSubmit={handleSubmit}>
            <label className={styled.Label}>
                <p className={styled.Text}>Email:</p>
                <input type="email"
                    className={styled.Input}
                    name="email"
                    value={email}
                    placeholder="enter your email"
                    onChange={handleChange}
                />
            </label>
            <label className={styled.Label}>
                <p className={styled.Text}>Password:</p>
                
                <input type="password"
                    className={styled.Input}
                    name="password"
                    value={password}
                    placeholder="remember your password"
                    onChange={handleChange}
                />
            </label>
            <button
                type="submit"
                className={styled.Button}
                
            >Log in</button>
        </form>
    )
}

export default LoginForm;