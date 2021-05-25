import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import foodsData from '../../fakeData/foodsData.json';

const FoodDetails = () => {
    const { id } = useParams();
    const [foodDetails, setFoodDetails] = useState({});
    useEffect(() => setFoodDetails(foodsData.find(food => food.id == id)), [id])

    const { name, fullDescription, price, images } = foodDetails;

    return (
        <div>
            <Container className="food-details my-5 pt-5">
                <Row>
                    <Col md={6} className="pr-md-4">
                        <h1>{name}</h1>
                        <p className="my-5">{fullDescription}</p>
                        <div className="d-flex my-4">
                            <h2 className="price">${price?.toFixed(2)}</h2>
                            <div className="cart-controller ml-3 btn">
                                <button className="btn">-</button> 1 <button className="btn">+</button>
                            </div>
                        </div>

                        <div className="action d-flex align-items-center">
                            <Button variant="danger" className="btn-rounded mb-2">Add</Button>
                        </div>

                        <div className="more-images mt-5 ">

                        </div>
                    </Col>

                    <Col md={6}>
                        <Image src={images?.[0]} fluid />
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default FoodDetails;