import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import { Welcome, Header,
        Login, Error,
        Loader, UsersList, UserDetail }  from './components'
import AuthProvider, { useAuth } from './components/security/AuthContext'


function AuthenticatedRoute({children}) { // HOC component to authenticate...
    const auth = useAuth();
    if(auth.isAuthenticated)
        return children;
    return <Navigate to="/login" />
}

export default function ClientApp() {
    return(
        <AuthProvider>
            <BrowserRouter>
                <Header/>
                    <Loader>
                        <Routes>
                            <Route path="/" element={<Navigate to="/login"/>}/>
                            <Route path='/login' element={<Login/>}/>

                            <Route path='/home' element={
                                <AuthenticatedRoute>
                                     <Welcome/>
                                </AuthenticatedRoute>}/>

                            <Route path='/users' element={
                                <AuthenticatedRoute>
                                    <UsersList/>
                                </AuthenticatedRoute>}/>

                            <Route path='/user/:id' element={
                                <AuthenticatedRoute>
                                    <UserDetail/>
                                </AuthenticatedRoute>}/>

                            <Route path='/logout' element={<Navigate to="/login"/>}/>
                            <Route path='*' element={<Error/>}/>
                        </Routes>
                    </Loader>
                </BrowserRouter>
        </AuthProvider>
    )
}