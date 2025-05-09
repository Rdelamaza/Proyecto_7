import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import './loginpage.css';


export const LoginPage = () => {
    return (

    <div className="container mt-3">
        <div className="row justify-content-center">
            <div className="col-md-20 col-lg-10">
            <div className="card shadow">
                <div className="card-body p-4">
                {/* Encabezado */}
                <div className="text-center mb-4">
                    <h1 className="card-title">Iniciar Sesión</h1>
                    <p className="text-muted">Ingresa a tu cuenta de La Casera</p>
                </div>

                {/* Formulario (usando tu componente LoginForm ya estilizado) */}
                <LoginForm />

                {/* Pie de página */}
                <div className="mt-3 text-center">
                    <p className="mb-2">
                    ¿No tienes una cuenta?{" "}
                    <Link to="/register" className="text-primary">
                        Regístrate aquí
                    </Link>
                    </p>
                    <Link to="#" className="text-muted">
                    ¿Olvidaste tu contraseña?
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}