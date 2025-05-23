
import { Card, Badge } from 'react-bootstrap';
import { formatCurrency} from '../../../../shared/utils/formatCurrency';
import {env} from '../../../../config/env.config';
import './cardproduct.css';
import { CartAddButton } from '../../../cart/components/CartAddButton';

const {optionsCurrency} = env


export const CardProduct = ({product}) => {
    const isAvailable = product.stock > 0;
    return (

      <Card className="h-100 shadow-sm product-card">

      <div className="product-image-container">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="p-3"
        />
      </div>


      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold mb-3">{product.name}</Card.Title>


      <Card.Text className="fw-bold mb-3">
        {formatCurrency (product.price, optionsCurrency) } 
        </Card.Text>


        <Card.Text className="text-muted small mb-4">
          {product.description}
        </Card.Text>


        <div className="mt-auto d-flex justify-content-between align-items-center">
          <Badge bg={isAvailable ? 'success' : 'danger'}className="py-1 px-1 fs-10">
            {isAvailable ? ' ' : ' '}
          </Badge>
          
          <CartAddButton product={product} isAvailable={isAvailable} />

        </div>
      </Card.Body>
    </Card>


    )
};