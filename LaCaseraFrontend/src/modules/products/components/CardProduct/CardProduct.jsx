import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './cardproduct.css';


export const CardProduct = ({product}) => {
    const isAvailable = product.stock > 0;
    return (
        //<div className="card">
           // <img src={product.image} />
            //<h2>{product.name}</h2>
            //<p>Precio: {product.price} pesos</p>
           // <p>Stock: {product.stock}unidades</p>
           // <p>Descripcion: {product.description}</p>
       // </div>

       <Card className="h-100 shadow-sm product-card">
       {/* Imagen del producto */}
       <div className="product-image-container">
         <Card.Img
           variant="top"
           src={product.image}
           alt={product.name}
           className="p-3"
         />
       </div>
 
       {/* Cuerpo de la tarjeta */}
       <Card.Body className="d-flex flex-column">
         <Card.Title className="fw-bold mb-3">{product.name}</Card.Title>
         
         {/* Precio */}
         <Badge bg="success" className="mb-2 fs-6">
           ${product.price.toLocaleString()} Pesos
         </Badge>
 
         {/* Descripción */}
         <Card.Text className="text-muted small mb-3">
           {product.description}
         </Card.Text>
 
         {/* Stock y botón */}
         <div className="mt-auto d-flex justify-content-between align-items-center">
           <Badge bg={isAvailable ? 'info' : 'danger'}>
             {isAvailable ? `${product.stock} disponibles` : 'Agotado'}
           </Badge>
           
           <Button
             variant={isAvailable ? 'primary' : 'secondary'}
             size="sm"
             disabled={!isAvailable}
           >
             {isAvailable ? 'Agregar al carrito' : 'No disponible'}
           </Button>
         </div>
       </Card.Body>
     </Card>


    )
};