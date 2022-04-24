import { PageLayout } from '../../components';
import React,{useState} from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import './Login.css'
import UiImg from './uiitem.svg'
import MonkImg from './MonkItem.svg'

async function loginUser(credentials){
    return fetch('https://www.mecallapi.com/api/login',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}


const LoginPage = () => {
    const [LogInUsername,setLogInUserName] = useState();
    const [LogInPassword,setLogInPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            LogInUsername,
            LogInPassword
        });
        console.log(response)
        console.log(LogInUsername)
        console.log(LogInPassword)
        if('accessToken' in response){
            localStorage.setItem('accessToken',response.accessToken)
            window.location.href = "/profile";
        }
    }
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
                            <Form className='Login-form' onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Username" onChange={(e) => setLogInUserName(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => setLogInPassword(e.target.value)} />
                                </Form.Group>

                                <Button className='Login-button' type="submit">LOGIN</Button>

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