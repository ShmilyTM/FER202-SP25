import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button } from "react-bootstrap";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/Products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <p className="text-center mt-5">Loading...</p>;
    }

    if (!product || Object.keys(product).length === 0) {
        return (
            <Container className="mt-5 text-center">
                <h4>Product not found.</h4>
                <Button 
                    variant="outline-primary" 
                    className="mt-3 btn-lg custom-btn"
                    onClick={() => navigate("/products")}
                >
                     Back to Products
                </Button>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <Card className="shadow">
                <Card.Img variant="top" src={product.image} className="p-3" style={{ height: "250px", objectFit: "contain" }} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
                    <Card.Text><strong>Price:</strong> {product.price}</Card.Text>
                    <Button 
                        variant="outline-primary" 
                        className="mt-3 btn-lg custom-btn"
                        onClick={() => navigate("/products")}
                    >
                        Back to Products
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ProductDetail;
