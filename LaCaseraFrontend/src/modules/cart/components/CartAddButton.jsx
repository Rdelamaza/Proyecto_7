import React from "react";
import useCartContext from "../context/CartContext";
import { Button } from "react-bootstrap";
import './cartaddbutton.css'; 

export const CartAddButton = ({ product, isAvailable, size = "small", color = "primaryColor" }) => {
    const addItem = useCartContext((state) => state.addItem);
    const handleAddToCart = () => {
        if (isAvailable) {
        addItem(product);
        }
    };

    const buttonClasses = `buttonBase ${size} ${color}`;

        return (
            <Button
                className={buttonClasses}
                onClick={handleAddToCart}
                disabled={!isAvailable}
                aria-disabled={!isAvailable}
                aria-label={isAvailable ? `Agregar ${product.name} al carrito` : `${product.name} no disponible`}
            >
                {isAvailable ? "Agregar a la bolsa" : "No disponible"}
            </Button>
        );
};




