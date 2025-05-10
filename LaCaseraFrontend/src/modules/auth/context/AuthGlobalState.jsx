import { useReducer } from "react"
import { authReducer } from "./authReducer.js"
import { loginService, registerService } from "../services/userApiService.js";
import { AuthContext } from './AuthContext.js';


const initialState = {
    user:null,
    token:null
}


export const AuthProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(authReducer,initialState);

    const login = async ({email, password}) => {
        try {
            const dataLogin = await loginService({email, password});

            const {token} = dataLogin[0];
            const user = dataLogin.data;

            if(!token || !user){
                throw new Error('No se pudo iniciar la sesion');
            }

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            dispatch({
                type:'LOGIN',
                payload: { user, token }
            });
        
        } catch (error) {
            console.error("Error logging in:",error);
            throw new Error(error);
            
        }

    }

    const register = async(userData)=> {
        try {
            const registerData = await registerService(userData);

            const user = registerData.data;

            if(!user) {
                throw new Error("No se pudo registrar el usuario")
            }
            dispatch({
                type:'REGISTER',
            payload: {user}
            })
        } catch (error) {
            console.log("Error registering", error);
            throw new Error(error);
            
        };
    }
    ;


    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch({
            type: 'LOGOUT'
        })
    };

    return(
        <AuthContext.Provider
            value={ {  //doble corchete para escribir codigo de JS en 'html' y el segundo es por un objeto de JS
                user: state.user,
                token: state.token,
                login,
                register,
                logout
            } }
        >
            {children}
        </AuthContext.Provider>

    )
}