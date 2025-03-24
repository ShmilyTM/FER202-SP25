import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../components/CarList.css";

const CarList = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/Cars")
            .then((response) => setCars(response.data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Car List</h2>
            <Row className="g-4">
                {cars.map((Cars) => (
                    <Col key={Cars.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={Cars.image} className="p-3" style={{ height: "180px", objectFit: "contain" }} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{Cars.brand}</Card.Title>
                                <Card.Text>{Cars.model}</Card.Text>
                                <Card.Text>Year: {Cars.year}</Card.Text>
                                <Card.Text>Price: {Cars.price}</Card.Text>
                                <Button 
                                    variant="primary" 
                                    className="mb-2" 
                                    onClick={() => navigate(`/CarList/${Cars.id}`)}
                                >
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CarList;
