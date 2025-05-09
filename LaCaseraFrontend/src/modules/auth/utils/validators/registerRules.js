

export const registerRules = {
    first_name: (value) => {
        if (!/^[a-zA-Z]+$/.test(value)) return 'Solo letras sin espacios';
        if (value.length < 3) return 'Mínimo 3 caracteres';
        if (value.length > 20) return 'Máximo 20 caracteres';
        return '';
    },

    last_name: (value) => {
        if (!value) return 'El apellido es requerido';
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/.test(value)) return 'Solo se permiten letras, espacios y apóstrofes';
        if (value.length < 3) return 'Mínimo 3 caracteres';
        if (value.length > 50) return 'Máximo 50 caracteres';
        return '';
    },

    email:  (value) => {
        if(!value) return 'El Correo es requerido';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'El Correo no es valido'
    },

    password:(value) => {
        if(!value) return "La contraseña es requerida";
        if(value.length < 6) return "La contraseña debe tener al menos 6 caracteres";
        if(value.length > 20) return "La contraseña no puede tener más de 20 caracteres";
        return ""
    },
    confirmPassword: (value, formData) => {
        if(!value) return "La confirmación de la contraseña es requerida";
        if(formData && value !== formData.password) return "Las contraseñas no coinciden";
        return ""},

    phone_number: (value) => {
        if (!value) return "El telefono es requerido";
        if (!/^\d{9}$/.test(value)) return "El telefono no es valido";
    },

    birth_date: (value) => {
        if (!value) return "La fecha es requerida";
        
        // Validar formato YYYY-MM-DD (obligatorio para type="date")
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return "Usa formato AAAA-MM-DD"; // Cambiar mensaje
        }

        const birthDate = new Date(value);
        const today = new Date();
        
        if (birthDate > today) return "Fecha no puede ser futura";
        if (today.getFullYear() - birthDate.getFullYear() < 18) {
            return "Debes ser mayor de edad";
        }
        return "";
    }
}