import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FORM_INITIAL_STATE } from "../../utils/types/initialFormState";
import { useValidateRegisterForm } from "../../hooks/useValidateRegisterForm";

export const RegisterForm = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState(FORM_INITIAL_STATE);
    const [formError, setFormError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { errors, validateField, validateForm } = useValidateRegisterForm(formData);

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
        validateField(name, value);
    }, [validateField]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormError("");

        if (!validateForm()) {
        setFormError("Por favor, corrige los errores antes de enviar.");
        return;
        }

        setIsLoading(true);

        try {
        await register(formData);
        navigate("/", { state: { success: "¡Registro exitoso! Inicia sesión." } });
        } catch (error) {
        setFormError(error.message || "Error al registrar. Intenta nuevamente.");
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
            <div className="card shadow">
                <div className="card-body p-4">
                <h2 className="card-title text-center mb-4">Crear cuenta</h2>
                
                {formError && (
                    <div className="alert alert-danger" role="alert">
                    {formError}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="row">
                    {/* Nombre */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="first_name" className="form-label">
                        Nombre
                        </label>
                        <input
                        type="text"
                        className={`form-control ${errors.first_name ? "is-invalid" : ""}`}
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        />
                        {errors.first_name && (
                        <div className="invalid-feedback">{errors.first_name}</div>
                        )}
                    </div>

                    {/* Apellido */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="last_name" className="form-label">
                        Apellido
                        </label>
                        <input
                        type="text"
                        className={`form-control ${errors.last_name ? "is-invalid" : ""}`}
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        />
                        {errors.last_name && (
                        <div className="invalid-feedback">{errors.last_name}</div>
                        )}
                    </div>
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                    </div>

                    {/* Contraseña */}
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                    )}
                    </div>

                    {/* Teléfono */}
                    <div className="mb-3">
                    <label htmlFor="phone_number" className="form-label">
                        Teléfono
                    </label>
                    <input
                        type="text"
                        className={`form-control ${errors.phone_number ? "is-invalid" : ""}`}
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                    />
                    {errors.phone_number && (
                        <div className="invalid-feedback">{errors.phone_number}</div>
                    )}
                    </div>

                    {/* Fecha de nacimiento */}
                    <div className="mb-4">
                    <label htmlFor="birth_date" className="form-label">
                        Fecha de nacimiento
                    </label>
                    <input
                        type="date"
                        className={`form-control ${errors.birth_date ? "is-invalid" : ""}`}
                        id="birth_date"
                        name="birth_date"
                        value={formData.birth_date}
                        onChange={handleChange}
                    />
                    {errors.birth_date && (
                        <div className="invalid-feedback">{errors.birth_date}</div>
                    )}
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
                            Registrando...
                        </>
                        ) : (
                        "Registrarse"
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
