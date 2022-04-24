import { PageLayout } from '../../components';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../state/auth';

import './Login.css';
import UiImg from './uiitem.svg';
import MonkImg from './MonkItem.svg';

const LoginPage = () => {
    const [LogInUsername, setLogInUserName] = useState();
    const [LogInPassword, setLogInPassword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);

    useEffect(() => {
        if (user.user) {
            navigate('/');
        }
    }, [navigate, user.user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('https://localhost:7061/api/users/login', {
            username: LogInUsername,
            password: LogInPassword,
        });

        if (response.data.username) {
            dispatch(userLogin(response.data));
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    };
    return (
        <PageLayout>
            <Container className="mt-5">
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <img className="w-150" src={UiImg} alt="" />
                    </Col>
                    <Col lg={4} md={6} sm={12} className="text-center">
                        <img className="icon-img" src={MonkImg} alt="" />
                        <Form className="Login-form" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="username"
                                    placeholder="Username"
                                    onChange={(e) => setLogInUserName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setLogInPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button className="Login-button" type="submit">
                                LOGIN
                            </Button>
                        </Form>
                        <div className="btn-login-register ">
                            <a href="register">
                                <small className="reset">Register</small>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </PageLayout>
    );
};

export default LoginPage;
