import { createContext, useContext, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import styles from './Loader.module.css'
import Spinner from 'react-bootstrap/Spinner';
// import { retrieveAllUsers } from '../../api/UserApiService'

const LoaderContext = createContext(false); // NEed to impl delay for loader...

export const useLoader = () => useContext(LoaderContext);

export default function LoaderProvider({children}) {

    const[isLoading, setLoading] = useState(false);

    return (
        <LoaderContext.Provider value={ { isLoading, setLoading } }>
            {isLoading ? <MyClipLoader/> : null}
            {children}
        </LoaderContext.Provider>
    )
}

export function MyClipLoader() {
    return(
        <div className={styles.loader}>
            <Spinner animation="border"/>
        </div>
    )
}
// experimental Class Loader
/* export class Loader2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            retrieveAllUsers()
            .then(result => this.setState({
                loading: false,
                data: [...result],
            }))
            .catch(error => {
                this.setState({loading: false})
                console.log(error)
            });
        });
    }

    render() {
        return(
            <>
                {this.state.loading ? <MyClipLoader/> : this.props.children}
            </>
        )
    }

} */

/* this is for class component also need to try
 onClick = () => {

//      Begin by setting loading = true, and use the callback function
//      of setState() to make the ajax request. Set loading = false after
//      the request completes.

   this.setState({ loading: true }, () => {
     Axios.get('/endpoint')
       .then(result => this.setState({
         loading: false,
         data: [...result.data],
       }));
   });
 }
 */