import { useState, useEffect } from "react";
import { fetchAllProduct } from "../services/fetchproduct";

export const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]= useState(null);
    
        useEffect(()=>{
            const getProduct = async() =>{
                try {
                    setLoading(true);

                    const response = await fetchAllProduct();
                    setProducts(response.data);
                    setError(null);
                } catch (err) {
                    setError(err);
                    console.error(err);
                } finally {
                    setLoading(false); 
                }
                
            };
            getProduct();
        },[]);

        return {products, loading, error}
};