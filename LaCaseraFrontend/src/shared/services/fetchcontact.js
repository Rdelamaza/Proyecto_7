
import { apiClient } from "./apiClient";

export const sendContactFormData = async (formData) => {
    try {
        const response = await apiClient.post('/contact', formData);
        return response.data; // O podrías retornar la respuesta completa si necesitas el status, etc.
    } catch (error) {
        console.error("Error al enviar los datos del formulario de contacto:", error);
        throw error; // Re-lanza el error para que el componente lo pueda manejar
    }
};