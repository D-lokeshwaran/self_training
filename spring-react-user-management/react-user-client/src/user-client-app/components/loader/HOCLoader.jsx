import ClipLoader from "react-spinners/ClipLoader"
import Spinner from 'react-bootstrap/Spinner';
import styles from './Loader.module.css'
import { useState, useEffect } from 'react'

// incomplete HOC loader
export default function HOCLoader(promise) {

    const[isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        promise.then(resp => {

        }).catch(error => console.log(error))
        setLoading(false);
    }, []);

    return (
        <>
            loading
        </>
    )
}

export function MyClipLoader() {
    return(
        <div className={styles.loader}>
            <Spinner animation="border"/>
        </div>
    )
}