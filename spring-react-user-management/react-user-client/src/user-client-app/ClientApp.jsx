import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import LoginComponent from './components/LoginComponent'
import ErrorComponent from './components/ErrorComponent'
import HeaderComponent from './components/HeaderComponent'
import AuthProvider, { useAuth } from './components/security/AuthContext'
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
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>

                    <Route path='/users' element={
                        <AuthenticatedRoute>
                            <ListUsersComp/>
                        </AuthenticatedRoute>}/>

                    <Route path='/logout' element={<LoginComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}