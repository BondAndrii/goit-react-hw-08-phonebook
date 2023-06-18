import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

// import styled from "./RegisterForm.module.css"
import { ButtonStyled, Input, Label, RegisterFormStyled, TextStyled } from "./RegisterForm.styled";


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
        // console.log("in change", value)
    }

      const handleSubmit = event => {
        event.preventDefault();
        const data = { name, email, password };
          dispatch(register(data))
        // console.log("сабміт ін регістер", data);
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
            <ButtonStyled type="submit">Log in</ButtonStyled>
        </RegisterFormStyled>
        // <form className={styled.RegisterForm} onSubmit={handleSubmit}>
        //     <label className={styled.Label}> 
        //         <p className={styled.Text}>Username:</p>
                 
        //         <input
        //             className={styled.Input}
        //             type="text"
        //             name="userName"
        //             value={name}
        //             placeholder="enter your name"
        //             onChange={handleChange}
        //         />
        //     </label>
        //      <label className={styled.Label}> 
        //         <p className={styled.Text}>Email:</p> 
        //         <input
        //             className={styled.Input}
        //             type="email"
        //             name="email"
        //             value={email}
        //             placeholder="enter your email"
        //             onChange={handleChange}
        //         />
        //     </label>
        //      <label className={styled.Label}> 
        //         <p className={styled.Text}>Password:</p>
        //         <input
        //             className={styled.Input}
        //             type="password"
        //             name="password"
        //             value={password}
        //             placeholder="create your password"
        //             onChange={handleChange}
        //         />
        //     </label>
        //     <button
        //         type="submit"
        //         className={styled.Button}
                
        //     >Register</button>
        // </form>
    )
}

export default RegisterForm;