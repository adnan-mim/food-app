import React from 'react';
import { Badge, Button, Nav, Navbar } from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="shadow-none p-4" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">
                <img
                    src="https://i.ibb.co/8m1BYh4/logo.png"
                    className="d-inline-block align-top"
                    alt="Quick Food Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className="mr-4" active style={{ fontWeight: "500" }}>Home</Nav.Link>
                    <Nav.Link as={Link} to="orders" className="mr-4" active style={{ fontWeight: "500" }}>Orders</Nav.Link>
                    {/* <Nav.Link as={Link} to="admin" className="mr-4" active style={{ fontWeight: "500" }}>Admin</Nav.Link> */}
                    <Nav.Link as={Link} to="cart" className="mr-4" active style={{ fontWeight: "500" }}>
                        <FiShoppingCart style={{ fontSize: "1.3rem" }} /><sup><Badge variant="warning">0</Badge></sup>
                    </Nav.Link>
                    <Nav.Link as={Link} to="login" className="mr-4" active style={{ fontWeight: "500" }}>Login</Nav.Link>
                    <Button as={Link} variant="warning" to="signup" className="shadow-none rounded-pill px-4 signup-btn">
                        Sign up
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;