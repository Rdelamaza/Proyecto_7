import { useState } from "react";
import { loginService } from "../../services/userApiService";


export const LoginForm =() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

    const handleLogin = async (event) => {
        event.preventDefault();    // evita que se reinicie la pagina al ahcer submit

        const formatData ={
            email,
            password
        }
        try {
            const dataLogin = await loginService(formatData);
            console.log(dataLogin);
            
            
        } catch (error) {
            console.error(error);
            alert ("Error al iniciar la sesion");
            
        }

    }

    return(
        <form onSubmit={handleLogin}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                    />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                    />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    )
};