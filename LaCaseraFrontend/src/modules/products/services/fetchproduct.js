import { apiClient } from "../../../shared/services/apiClient";


export const fetchAllProduct = async () =>{
    try {
        const {data} = await apiClient.get('/products/')
        console.log(data);
        
        return data;
    } catch (error) {
        console.error("Error fetching product data;", error);
        throw new Error(error);        
    }
};

export const fetchProductById = async(id)=>{
    try {
        const {data} = await apiClient.get(`/products/${id}`);
        return data;
    } catch (error) {
        console.error(`Error obteniendo el producto con el id: ${id}`,error);
        
    }
};    