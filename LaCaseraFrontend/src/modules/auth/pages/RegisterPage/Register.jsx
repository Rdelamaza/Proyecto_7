import { RegisterForm } from '../../components/Register/RegisterForm';
import './RegisterPage.css';

export const RegisterPage = () => {
    return (
        <div className="register-container">
        <div className="register-card">
            <div className="register-header">
            <h1>Crea tu Cuenta</h1>
            <p>Completa tus datos para registrarte</p>
            </div>

            <RegisterForm />

            <div className="register-footer">
            <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a></p>
            </div>
        </div>
        </div>
    );
};