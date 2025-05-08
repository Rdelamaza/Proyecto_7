import React from 'react';
import { Link } from 'react-router-dom';
import { BsTrash, BsDash, BsPlus, BsArrowLeft } from 'react-icons/bs';
import useCartContext from '../../context/CartContext';
import './cartpage.css';
import formatCurrency from '../../../../shared/utils/formatCurrency';
import { env } from '../../../../config/env.config';

const { optionsCurrency } = env;

const CartPage = () => {
    const { 
        products, 
        totalItems, 
        totalPrice, 
        addItem, 
        removeOneItem,  // Usamos removeOneItem directamente
        removeItem, 
        clearCart 
    } = useCartContext();

    // Verificación de consistencia
    const calculatedTotal = products.reduce(
        (sum, product) => ({
            items: sum.items + product.quantity,
            price: sum.price + (product.price * product.quantity)
        }), 
        { items: 0, price: 0 }
    );

    const showWarning = (
        calculatedTotal.items !== totalItems || 
        calculatedTotal.price !== totalPrice
    );

    if (!products || products.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="continue-shopping">
                    <BsArrowLeft /> Continuar comprando
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>Tu Carrito de Compras</h1>
                <div className="cart-counts">
                    <span>
                        {products.length} {products.length === 1 ? 'producto' : 'productos'}
                        {totalItems !== products.length && (
                            <span className="units-count">
                                ({totalItems} {totalItems === 1 ? 'unidad' : 'unidades'})
                            </span>
                        )}
                    </span>
                    {showWarning && (
                        <div className="consistency-warning">
                            <span>⚠️ Los totales no coinciden. Actualiza la página.</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="cart-content">
                <div className="products-list">
                    {products.map((product) => (
                        <div key={product._id} className="cart-item">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p className="product-price">
                                    {formatCurrency(product.price, optionsCurrency)}
                                </p>
                            </div>
                            <div className="quantity-control">
                            
                                <button
                                    onClick={() => addItem(product)}
                                    className="quantity-btn plus-btn"
                                    aria-label="Aumentar cantidad"
                                >
                                    <BsPlus />
                                </button>
                                <span className="quantity">{product.quantity}</span>
                                <button
                                    onClick={() => removeOneItem(product._id)}  // Usamos removeOneItem aquí
                                    disabled={product.quantity <= 1}
                                    className="quantity-btn minus-btn"
                                    aria-label="Reducir cantidad"
                                >
                                    <BsDash />
                                </button>
                                
                            </div>
                            <div className="product-subtotal">
                                {formatCurrency(product.price * product.quantity, optionsCurrency)}
                            </div>
                            <button
                                className="remove-item"
                                onClick={() => removeItem(product._id)}  // removeItem elimina completamente
                                aria-label={`Eliminar ${product.name} del carrito`}
                            >
                                <BsTrash />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="order-summary">
                    <h2>Resumen de Compra</h2>
                    <div className="summary-row">
                        <span>Subtotal ({totalItems} {totalItems === 1 ? 'unidad' : 'unidades'}):</span>
                        <span>{formatCurrency(totalPrice, optionsCurrency)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Envío:</span>
                        <span className="free-shipping">Gratis</span>
                    </div>
                    <div className="summary-total">
                        <span>Total:</span>
                        <span>{formatCurrency(totalPrice, optionsCurrency)}</span>
                    </div>
                    <button className="checkout-btn">Proceder al pago</button>
                    <button 
                        className="clear-cart"
                        onClick={() => {
                            if (window.confirm('¿Estás seguro de vaciar el carrito?')) {
                                clearCart();
                            }
                        }}
                    >
                        Vaciar carrito
                    </button>
                    <Link to="/" className="continue-shopping">
                        <BsArrowLeft /> Seguir comprando
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;