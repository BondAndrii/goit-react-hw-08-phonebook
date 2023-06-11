import { useState } from "react";



const LoginForm = () => {
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
        console.log("in change", value)
    }
    return (
        <form>
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
            <button type="submit">Log in</button>
        </form>
    )
}

export default LoginForm;