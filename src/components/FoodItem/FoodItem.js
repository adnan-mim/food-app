import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
    const { id, name, shortDescription, price, images } = props.food;
    return (
        <Col as={Link} to={`/food/${id}`} md={4} className="mb-4 food">
            <Card className="text-center">
                <Card.Img variant="top" src={images[0]} />
                <Card.Body>
                    <Card.Title as={"h5"}>{name}</Card.Title>
                    <Card.Text>{shortDescription}</Card.Text>
                    <h4>${price.toFixed(2)}</h4>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FoodItem;