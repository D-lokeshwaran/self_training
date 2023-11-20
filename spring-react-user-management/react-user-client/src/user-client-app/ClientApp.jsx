import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import { Welcome, Header, Login, Error }  from './components'
import AuthProvider, { useAuth } from './components/security/AuthContext'
import LoaderProvider from './components/loader/LoaderContext'
import ListUsersComp from './components/user/ListUsersComp'


function AuthenticatedRoute({children}) {
    const auth = useAuth();
    if(auth.isAuthenticated)
        return children;
    return <Navigate to="/login" />
}

export default function ClientApp() {
    return(
        <AuthProvider>
            <LoaderProvider>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Navigate to="/login"/>}/>
                        <Route path='/login' element={<Login/>}/>

                        <Route path='/home' element={
                            <AuthenticatedRoute>
                                 <Welcome/>
                            </AuthenticatedRoute>}/>

                        <Route path='/users' element={
                            <AuthenticatedRoute>
                                <ListUsersComp/>
                            </AuthenticatedRoute>}/>

                        <Route path='/logout' element={<Login/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>
                </BrowserRouter>
            </LoaderProvider>
        </AuthProvider>
    )
}