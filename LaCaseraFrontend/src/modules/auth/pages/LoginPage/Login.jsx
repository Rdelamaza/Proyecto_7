import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import './loginpage.css';


export const LoginPage = () => {
    return (

        <div className="login-container">
            <div className="login-card">
            <div className="login-header">
            <h1 className="login-title">Iniciar Sesión</h1>
            <p className="login-subtitle">Ingresa a tu cuenta de La Casera</p>
        </div>

        <LoginForm />

        <div className="login-footer">
        <p className="login-link-text">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="login-link">
            Regístrate aquí
            </Link>
        </p>
        <Link to="#" className="forgot-password">
            ¿Olvidaste tu contraseña?
        </Link>
        </div>
    </div>
    </div>



        /*<>
        <h1>Inciar Sesión</h1>
        <LoginForm/>
        <p>
            ¿No tienes una cuenta? <Link to="/register">Registrate aqui</Link>

        </p>

        
        </>*/
    )
}