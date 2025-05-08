import React from "react";
import useCartContext from "../context/CartContext";
import { Button } from "react-bootstrap";
import './cartaddbutton.css'; // Importa tu archivo CSS personalizado

export const CartAddButton = ({ product, isAvailable, size = "medium", color = "primaryColor" }) => {
    const addItem = useCartContext((state) => state.addItem);
    const handleAddToCart = () => {
        if (isAvailable) {
        addItem(product);
        }
    };

  // Construye dinámicamente las clases CSS
    const buttonClasses = `buttonBase ${size} ${color}`;

        return (
            <Button
                className={buttonClasses} // Aplica tus clases CSS personalizadas
                onClick={handleAddToCart}
                disabled={!isAvailable}
                aria-disabled={!isAvailable}
                aria-label={isAvailable ? `Agregar ${product.name} al carrito` : `${product.name} no disponible`}
            >
                {isAvailable ? "Agregar a la bolsa" : "No disponible"}
            </Button>
        );
};




