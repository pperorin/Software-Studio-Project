import { PageLayout } from '../../components';
import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import './Login.css'
import UiImg from './uiitem.svg'
import MonkImg from './MonkItem.svg'


const LoginPage = () => {
    return (
        <>
            <PageLayout>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={8} md={6} sm={12}>
                            <img className='w-150' src={UiImg} alt="" />
                        </Col>
                        <Col lg={4} md={6} sm={12} className='text-center'>
                            <img className='icon-img' src={MonkImg} />
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">LOGIN</Button>


                            </Form>
                            <div className="btn-login-register ">
                                <a href="register"><small className='reset'>Register</small></a>
                            </div>
                        </Col>


                    </Row>
                </Container>
            </PageLayout>
        </>
    );
};

export default LoginPage;
