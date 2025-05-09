import { apiClient } from "../../../shared/services/apiClient";
import { Form } from "react-router-dom";

export const loginService = async ({email , password})=>{
    try {
        const {data} = await apiClient.post('/users/login',{email, password});
        console.log(data);
        
        return data;
    } catch (error) {
        console.error("Error loggin in", error);
        throw new Error(error);
    }
};

export const registerService = async (userData) => {
    try {
        const { data } = await apiClient.post('/users/register', userData, {headers: {'Content-Type': 'application/json'}
        });
        return data;
    } catch (error) {
        console.error("Error registering:", error);
        throw new Error(error);
    }
};