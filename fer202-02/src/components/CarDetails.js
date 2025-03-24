import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button } from "react-bootstrap";

const CarDetail = () => {
    const { id } = useParams();
    const [Cars, setCars] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/Cars/${id}`);
                setCars(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, [id]);

    if (loading) {
        return <p className="text-center mt-5">Loading...</p>;
    }

    if (!Cars || Object.keys(Cars).length === 0) {
        return (
            <Container className="mt-5 text-center">
                <h4>Cars not found.</h4>
                <Button 
                    variant="outline-primary" 
                    className="mt-3 btn-lg custom-btn"
                    onClick={() => navigate("/CarList")}
                >
                     Back to CarList
                </Button>
            </Container>
        );
    }


    return (
        <Container className="mt-5">
            <Card className="shadow">
                <Card.Img variant="top" src={Cars.image} className="p-3" style={{ height: "180px", objectFit: "contain" }} />
                <Card.Body>
                     <Card.Title>{Cars.brand}</Card.Title>
                     <Card.Text>{Cars.model}</Card.Text>
                     <Card.Text>Year: {Cars.year}</Card.Text>
                     <Card.Text>Price: {Cars.price}</Card.Text>
                    <Button 
                        variant="outline-primary" 
                        className="mt-3 btn-lg custom-btn"
                        onClick={() => navigate("/CarList")}
                    >
                        Back to Car List
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CarDetail;
