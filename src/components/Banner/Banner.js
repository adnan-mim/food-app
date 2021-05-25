import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';

const Banner = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container className="home-container" fluid>
            <Header />
            <Container className="home-cont-text">
                <h1 className="h1 text-uppercase text-white text-center mb-4">
                    <strong>Organic Fast Food Made <br /> Easy And Healthy</strong>
                </h1>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} md={10} xs={12}>
                            <Card as={Form} style={{ background: "inherit" }} onSubmit={handleSubmit(onSubmit)}>
                                <Card.Body as={Row} className="no-gutters bg-white rounded-pill align-items-center p-0">
                                    <Col>
                                        <Form.Control className="form-control-borderless p-4 border-0 rounded-pill" type="search" placeholder="Search food" {...register("keyword")} />
                                    </Col>
                                    <Col xs={"auto"}>
                                        <Button variant="warning" className="rounded-pill search-btn" type="submit">Search</Button>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container className="text-white text-center mt-4">
                    <Col lg={7} md={8} xs={12} className="mx-auto">
                        <img style={{ width: "95%" }} alt="" src="https://i.ibb.co/YygqjNx/options-img.png" />
                    </Col>
                </Container>
            </Container>
        </Container>
    );
};

export default Banner;