import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";


export const LoginForm =() => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const [isLoading, setIsLoading] = useState(false);
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
            
        } finally{
            setIsLoading(false);
        }

    }

    return(
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
            <div className="card shadow">
                <div className="card-body p-4">
                <h2 className="card-title text-center mb-4">Iniciar sesión</h2>

                <form onSubmit={handleLogin}>
                    {/* Email */}
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>

                    {/* Contraseña */}
                    <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>

                    {/* Botón de envío */}
                    <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary py-2"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                            Iniciando sesión...
                        </>
                        ) : (
                        "Iniciar sesión"
                        )}
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
        );
};
        
