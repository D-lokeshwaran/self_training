import { useContext, createContext, useState } from 'react';
import { executeBasicAuthApi } from '../../api/AuthorizationApiService'

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {

    const[isAuthenticated, setAuthenticated] = useState(false);
    const[username, setUsername] = useState('');
    const[token, setToken] = useState(null);
//     const[rememberMe, setRememberMe] = useState(false); // later impl


    async function authenticate(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ":" + password);

        try {
            const response = await executeBasicAuthApi(baToken);

           if(response.status === 200) {
               setAuthenticated(true);
               setUsername(username)
               setToken(baToken)
               localStorage.setItem('token', baToken);

               /* apiClient.interceptors.request.use(
                    (config) => {
                        console.log("Token is intercepts and authorized")
                        config.headers.authorization=baToken;
                        return config;
                    }
               ) */

               return true;
           } else {
               logout();
               return false
           }
        } catch (error) {
            console.log(error);
            logout();
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
        setUsername(null)
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated, authenticate, logout, token, username} }>
            {children}
        </AuthContext.Provider>
    )
}