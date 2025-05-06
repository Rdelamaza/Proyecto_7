import axios from "axios";


export const fetchAllProduct = async () =>{
    try {
        const {data} = await axios.get('http://localhost:3000/api/v1/products');
        console.log(data);
        
        return data;
    } catch (error) {
        console.error("Error fetching product data;", error);
        throw new Error(error);        
    }
};