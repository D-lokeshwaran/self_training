import { useState } from 'react'
import { useAuth } from './security/AuthContext'
import { useNavigate } from 'react-router-dom'
import styles from './components.module.css'

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

    async function handleLogin(ev) {
        ev.preventDefault();
        if(await auth.authenticate(username, password)) {
            navigateTo("/home")
        } else {
            setFailed(true);
            setPassword("");
        }
    }

    return(
        <div>
            <form onSubmit={handleLogin}>

                {failed && <div className="alert alert-warning">
                    Authentication Failed, Please Check your Credentials!</div>}
                <div className={styles.login_form}>
                    <h1>Time To LogIn</h1>
                    <div className="fields-container">
                        <fieldset className={styles.mtb_20}>
                            <label for="username" className={styles.floatLeft}><b>User Name</b></label>
                            <input className={styles.data_field} type="text" name="username" value={username}
                                   onChange={handleUsernameChange}/>
                        </fieldset>
                        <fieldset className={styles.mtb_20}>
                            <label for="password" className={styles.floatLeft}><b>Password</b></label>
                            <input className={styles.data_field} type="password" name="password" value={password}
                                   onChange={handlePasswordChange}/>
                        </fieldset>
                    </div>
                    <div>
                        <button className={`${styles.login} ${styles.mtb_20}`} type="submit">Login</button>
                    </div>
                    <div>
                        <fieldset className={styles.floatLeft}>
                            <input type="checkbox" name="rememberMe" checked={true}/>
                            <label> Remember Me?</label>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    )
}