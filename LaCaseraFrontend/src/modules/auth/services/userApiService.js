import { apiClient } from "../../../shared/services/apiClient";

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