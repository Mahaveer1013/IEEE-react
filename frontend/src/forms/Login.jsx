import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { faEye,faEyeSlash } from "@fortawesome/fontawesome-free-solid";

export default function Login() {
    
    const [loginForm, setLoginForm] = useState({
        email: '',
        password : ''
    })

    function handleLoginForm(event) {
        const { name, value } = event.target;
        setLoginForm({
            ...loginForm,[name]:value
        })
    }

    const [showPass, setShowPass] = useState(false);

    return (
        <>
            <form action="" method="post" className="login-form">
                <div className="input">
                    <label htmlFor="email">Enter Email:</label>
                    <input
                        type="email"
                        name='email'
                        id="email"
                        onChange={handleLoginForm}
                        value={loginForm.email}/>
                </div>
                <div className="input">
                    <label htmlFor="password">Enter Password:</label>
                    <input
                        type={showPass?'text':'password'}
                        id="password"
                        name='password'
                        onChange={handleLoginForm}
                        value={loginForm.password} />
                    <FontAwesomeIcon 
                        icon={showPass ? faEyeSlash : faEye}
                        className="show-password"
                        onClick={() => { setShowPass(prev => (!prev)) }} />
                </div>
                <div className="submit">
                    <button><span>&lt;~&gt;</span> Login</button>
                </div>
            </form>
        </>
    )
}