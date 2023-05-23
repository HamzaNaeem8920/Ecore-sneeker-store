import Button from "./elements/Button";
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const ProductDetailCard = ({ product, onAddProduct }) => {
    return (
      

// Assuming 'products' is an array containing the product data

<Row>
  {product.map((product) => (
    <Col key={product._id.$oid} xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary" onClick={() => onAddProduct(product)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> )
    
}

export default ProductDetailCard;