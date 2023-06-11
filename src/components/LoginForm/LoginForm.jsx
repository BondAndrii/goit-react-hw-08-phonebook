


const LoginForm = () => {
    return (
        <form>
            <label>
                Emaill:
                <input type="email" name="email"/>
            </label>
            <label>
                Password:
                <input type="password" name="password"/>
            </label>
            <button type="submit">Log in</button>
        </form>
    )
}

export default LoginForm;