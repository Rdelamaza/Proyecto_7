import { useEffect, useState } from "react"
import { fetchAllProduct } from "../../services/fetchproduct";
import { CardProduct } from "../../components/CardProduct/CardProduct";


export const MenajePage = () => {
    const [products, setProducts] = useState([]);

    useEffect (()=>{
        const fetchProduct = async() =>{
            const products = await fetchAllProduct();
            console.log(products);
            setProducts(products.data);

        }
        fetchProduct();

    },[])

    return (
        <>
            <div className="product-container">
                {
                    products.map (product =>(
                        <CardProduct key ={product._id} product ={product}/>
                    ))
                }
            </div>
        </>
    )
}


export default MenajePage