import { useState } from "react";
// import { useDispatch } from "react-redux";



const LoginForm = () => {
    // const dispatch = useDispatch();

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

        console.log("сабміт ін логін", data);
        reset(); 
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Emaill:
                <input type="email"
                    name="email"
                    value={email}
                    placeholder="enter your email"
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input type="password"
                    name="password"
                    value={password}
                    placeholder="remember your password"
                    onChange={handleChange}
                />
            </label>
            <button
                type="submit"
                
            >Log in</button>
        </form>
    )
}

export default LoginForm;