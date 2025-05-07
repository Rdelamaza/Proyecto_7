import { useReducer } from "react"
import { authReducer } from "./authReducer"
import { loginService } from "../services/userApiService";
import { AuthContext } from "./AuthContext";


const initialState = {
    user:null,
    token:null
}


export const AuthGlobalState = ({childen}) => {

    const [ state, dispatch ] = useReducer(authReducer,initialState);

    const login = async ({email, password}) => {
        try {
            const dataLogin = await loginService({email, password});
            const {token} = dataLogin;
            const user = dataLogin.data;

            if(!token || !user){
                throw new Error('No se pudo iniciar la sesion',error);
            }

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            dispatch({
                type:'LOGIN',
                payload:{ user, token }
            })
        
        } catch (error) {
            console.error("Error logging in:",error);
            throw new Error(error);
            
        }

    }

    return(
        <AuthContext.Provider
            value={{  //doble corchete para escribir codigo de JS en 'html' y el segundo es por un objeto de JS
                user: state.user,
                token: state.token,
                login
            }}
        >
            {childen}
        </AuthContext.Provider>

    )
}