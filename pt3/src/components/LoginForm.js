import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Alert, Toast } from "react-bootstrap";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("http://localhost:3001/UserAccounts");
            const user = response.data.find(
                (user) => user.username === username && user.password === password
            );
            if (user) {
                setShowToast(true);
                navigate("/products");
            } else {
                setError("Invalid username or password!");
            }
        } catch (error) {
            console.error("Login Error:", error);
            setError("Error connecting to the server.");
        }
    };

    return (
        <Container className="mt-5">
            <h2>Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Login
                </Button>
            </Form>
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                <Toast.Body>Login Successful!</Toast.Body>
            </Toast>
        </Container>
    );
};

export default LoginForm;
