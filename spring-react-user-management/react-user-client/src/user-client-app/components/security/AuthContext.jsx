import { useContext, createContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {

    const[isAuthenticated, setAuthenticated] = useState(false);

    function authenticate(username, password) {
        if(username === 'developer' && password === 'test1234') {
            setAuthenticated(true);
            return true;
        } else {
            setAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated, authenticate, logout} }>
            {children}
        </AuthContext.Provider>
    )
}