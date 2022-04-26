import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Form, Button } from 'react-bootstrap';

const Password = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onLogoutHandler = () => {
        navigate('/logout');
    };

    const onClickChangePassword = async (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            try {
                await axios.put(`https://localhost:7061/api/users/editPassword/${user.user.id}`, {
                    password,
                    NewPassword: newPassword,
                });
                alert('Password changed successfully');
                setPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } catch (error) {
                alert(error.message);
            }
        } else {
            alert('Password not match');
        }
    };

    const onClickDeleteAccount = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`https://localhost:7061/api/users/${user.user.id}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            alert('Account deleted successfully');
            navigate('/logout');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <Form onSubmit={onClickChangePassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Current Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="newPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter New Password"
                        required
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmNewPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Confirm Password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </Form.Group>
                <Button variant="secondary" onClick={onClickDeleteAccount}>
                    Delete Account
                </Button>
                <Button variant="primary float-end" type="submit">
                    Change Password
                </Button>
                <br></br>
                <br></br>
                <Button variant="danger float-end" onClick={onLogoutHandler}>
                    Logout
                </Button>
            </Form>
        </div>
    );
};

export default Password;
