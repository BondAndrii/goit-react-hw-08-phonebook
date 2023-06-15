import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";


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
        <form onSubmit={handleSubmit}>
            <label> 
                Username: 
                <input
                    type="text"
                    name="userName"
                    value={name}
                    placeholder="enter your name"
                    onChange={handleChange}
                />
            </label>
            <label> 
                Email: 
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="enter your email"
                    onChange={handleChange}
                />
            </label>
            <label> 
                Password: 
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="create your password"
                    onChange={handleChange}
                />
            </label>
            <button
                type="submit"
                
            >Register</button>
        </form>
    )
}

export default RegisterForm;