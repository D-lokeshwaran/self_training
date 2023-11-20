import {Link} from 'react-router-dom';
import {useAuth} from './security/AuthContext';

export default function HeaderComponent() {

    const auth = useAuth();
    const isAuthenticated = auth.isAuthenticated;

    return(
        <header className="border-bottom border-light border-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://mahaswami.com">
                            Mahaswami Software</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/home">Home</Link>}
                                </li>
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/users">Users</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!isAuthenticated
                                    && <a className="nav-link" href="/login">Login</a>}
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated
                                    && <Link className="nav-link" to="/logout"
                                             onClick={auth.logout}>Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}