import useCartContext from "../context/CartContext"
import { Button } from "react-bootstrap";

export const CartAddButton = ({product, isAvailable}) => {
    const addItem = useCartContext((state) => state.addItem);
    const handleAddToCart =() => {
        if(isAvailable){
            addItem(product);
        }
    }

    return (
        <Button variant={isAvailable ? 'primary' : 'secondary'} size="sm"
            onClick={handleAddToCart}
            disabled={!isAvailable}
            aria-disabled={!isAvailable}
            aria-label={isAvailable ? `Agregar ${product.name} al carrito` : `${product.name} no disponible`}
        >
        {isAvailable ? 'Agregar a la bolsa' : 'No disponible'}
    </Button>

    )
}