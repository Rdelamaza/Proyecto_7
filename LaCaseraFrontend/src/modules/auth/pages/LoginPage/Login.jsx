import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"


export const LoginPage = () => {
    return (
        <>
        <h1>Inciar Sesión</h1>
        <LoginForm/>
        <p>
            ¿No tienes una cuenta? <Link to="/register">Registrate aqui</Link>

        </p>

        
        </>
    )
}