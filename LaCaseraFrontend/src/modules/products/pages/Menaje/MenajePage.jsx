import { CardProduct } from "../../components/CardProduct/CardProduct";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";

export const MenajePage = () => {
    const { products, loading, error } = useFetchProducts();
    // Renderizado condicional
    if (loading) {
    return (
        <Container className="my-5 text-center">
            <Spinner animation="border" variant="primary" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
            <p className="mt-2">Cargando productos...</p>
        </Container>
    );
    }

    if (error) {
        return (
        <Container className="my-5">
            <Alert variant="danger" className="text-center">
            <Alert.Heading>Error al cargar productos</Alert.Heading>
            <p>{error.message || "Por favor intenta nuevamente más tarde"}</p>
            <Button 
                variant="outline-danger" 
                onClick={() => window.location.reload()}
                size="sm"
                >
                Reintentar
            </Button>
            </Alert>
        </Container>
        );
    }

    return (
        <Container className="my-4">
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {products.map((product) => (
            <Col key={product._id}>
                <CardProduct product={product} />
            </Col>
            ))}
        </Row>
        </Container>
    );
};

export default MenajePage;
