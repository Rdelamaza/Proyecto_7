export const CardProduct = ({product}) => {
    return (
        <div className="card">
            <h2>{product.name}</h2>
            <p>Precio: {product.price} pesos</p>
            <p>Stock: {product.stock}unidades</p>
            <p>Descripcion: {product.description}</p>
        </div>
    )
};