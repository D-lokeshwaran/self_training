import { Link } from 'react-router-dom'
import { useLoader } from './loader/LoaderContext'

export default function WelcomeComponent() {

    const loader = useLoader();

    function testLoader() {
        loader.setLoading(true);
        setTimeout(() => {
            loader.setLoading(false);
        }, 800)
    }

    return(
        <div>
            <h1>Hello User: lokesh Welcome to our Community</h1>
            <span>Click this to <Link to="/users">manage users</Link> </span>
            <div className="mt-4">
                <button className="btn btn-success"
                        onClick={testLoader}>Check Loader</button>
            </div>

        </div>
    )
}