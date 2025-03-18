import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../components/ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/Products")
            .then((response) => setProducts(response.data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Product List</h2>
            <Row className="g-4">
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={product.image} className="p-3" style={{ height: "180px", objectFit: "contain" }} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                                <Button 
                                    variant="primary" 
                                    className="mb-2" 
                                    onClick={() => navigate(`/products/${product.id}`)}
                                >
                                    View Details
                                </Button>
                                <Button 
                                    variant="success" 
                                    className="mt-auto"
                                >
                                    Buy Now - {product.price}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
