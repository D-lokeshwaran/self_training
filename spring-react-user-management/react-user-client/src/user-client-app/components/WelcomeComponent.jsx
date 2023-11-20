import { Link } from 'react-router-dom'

export default function WelcomeComponent() {
    return(
        <div>
            <h1>Hello User: lokesh Welcome to our Community</h1>
            <span>Click this to <Link to="/users">manage users</Link> </span>
        </div>
    )
}