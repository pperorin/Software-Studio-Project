import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Password = (props) => {
    return <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Current Password</Form.Label>
                <Form.Control type="email" placeholder="Enter Current Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="Enter New Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
}

export default Password;