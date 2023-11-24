import { useState } from 'react'
import { useAuth } from './security/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function LoginComponent() {

    const auth = useAuth();
    const navigateTo = useNavigate();

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[failed, setFailed] = useState(false)

    function handleUsernameChange(ev) {
        setUsername(ev.target.value);
    }

    function handlePasswordChange(ev) {
        setPassword(ev.target.value);
    }

    async function handleLogin() {
        if(await auth.authenticate(username, password)) {
            navigateTo("/home")
        } else {
            setFailed(true);
        }
    }

    return(
        <div>
            <div className="login">
                <h1>Time To LogIn</h1>
                {failed && <>Authentication Failed, Please Check your Credentials!</>}
                <div className="loginForm">
                    <div className="m-3">
                        <label>User Name</label>
                        <input type="text" name="username" value={username}
                               onChange={handleUsernameChange}/>
                    </div>
                    <div className="m-3">
                        <label>Password</label>
                        <input type="password" name="password" value={password}
                               onChange={handlePasswordChange}/>
                    </div>
                    <div>
                        <button onClick={handleLogin}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}