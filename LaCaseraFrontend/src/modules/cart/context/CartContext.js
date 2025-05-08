import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartContext = create (
    persist(
        (set, get) => ({
            products: [],
            totalItems: 0,
            totalPrice: 0,

            addItem: (product) => {
                const products = get().products;
                const existingProduct = products.find((item) => item.id === product.id);

                if(existingProduct){
                    const updateProduct = products.map((product)=> product.id === existingProduct.id
                    ? {...product, quantity: product.quantity + 1}
                    : product
                    );

                    set((state)=>({
                        products: updateProduct,
                        totalItems: state.totalItems +1,
                        totalPrice: state.totalPrice + product.price

                    }))
                } else{
                    const productWithQuantity = {...product, quantity: 1}

                    set((state) => ({
                        products: [...state.products, productWithQuantity ],
                        totalItems: state.totalItems + 1,
                        totalPrice: state.totalPrice + product.price
                        
                    }))

                }
            }
        })
    )
)