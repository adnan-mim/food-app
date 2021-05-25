import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Row, Tab } from 'react-bootstrap';
import foodsData from '../../fakeData/foodsData.json';
import FoodItem from '../FoodItem/FoodItem';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => setFoods(foodsData), [])

    return (
        <Container className="my-5">

            <Tab.Container defaultActiveKey="breakfast">
                <Container className="my-5">
                    <Nav className="d-flex justify-content-center">
                        <Nav.Item className="mr-md-5">
                            <Nav.Link eventKey="breakfast">Breakfast</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mr-md-5">
                            <Nav.Link eventKey="lunch">Lunch</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="dinner">Dinner</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>

                <Tab.Content>
                    <Tab.Pane eventKey="breakfast">
                        <Row>
                            {
                                foods.filter(food => food.type === "Breakfast")
                                    .map(food => <FoodItem key={food.id} food={food} />)
                            }
                        </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="lunch">
                        <Row>
                            {
                                foods.filter(food => food.type === "Lunch")
                                    .map(food => <FoodItem key={food.id} food={food} />)
                            }
                        </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="dinner">
                        <Row>
                            {
                                foods.filter(food => food.type === "Dinner")
                                    .map(food => <FoodItem key={food.id} food={food} />)
                            }
                        </Row>
                    </Tab.Pane>
                </Tab.Content>

            </Tab.Container>

            <div className="text-center">
                <Button variant="danger">Check Out Your Food</Button>
            </div>

        </Container>
    );
};

export default Foods;