

export const registerRules = {
    firt_name: (value) => (/^[a-zA-Z]+$/.test(value) && value.length >= 3 && value.length >= 20),
    last_name: (value) => (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/.test(value) && value.length >= 3 && value.length >= 20),
    email: (value) => {
        if(!value) return 'El Correo es requerido';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'El Correo no es valido';
    },
    phone_number: (value) => {
        if (!value) return "El telefono es requerido";
        if (!/^\d{9}$/.test(value)) return "El telefono no es valido";
    },
    birth_date: (value) => {
        if(!value) return "La fecha de nacimiento es requerida";
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        if(age < 18) return "Debes ser mayor de edad para registrarte";
    },
    password: (value) => {
        if(!value) return "La contraseña es requerida";
        if(value.length < 6) return "La contraseña debe tener al menos 6 caracteres";
        if(value.length > 20) return "La contraseña no puede tener más de 20 caracteres";
        return ""
    },
    
};