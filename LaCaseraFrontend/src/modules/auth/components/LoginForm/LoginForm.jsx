import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


export const LoginForm =() => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();    // evita que se reinicie la pagina al ahcer submit

        const formatData ={
            email,
            password
        }
        try {
            await login(formatData);
            navigate('/');

            
            
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