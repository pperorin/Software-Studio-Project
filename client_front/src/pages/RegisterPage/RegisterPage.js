import './Register.css';
import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../state/auth';

import { PageLayout } from '../../components';

const RegisterPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    const [errorUserName, setErrorUserName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorRePassword, setErrorRePassword] = useState('');

    const [userNameColor, setUserNameColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [repasswordColor, setRepasswordColor] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateForm = async (e) => {
        e.preventDefault();
        if (userName.length > 8) {
            setErrorUserName('');
            setUserNameColor('green');
        } else {
            setErrorUserName('Enter a username of more than 8 characters.');
            setUserNameColor('red');
        }

        if (password.length > 8) {
            setErrorPassword('');
            setPasswordColor('green');
        } else {
            setErrorPassword('Enter a password of more than 8 characters.');
            setPasswordColor('red');
        }

        if (repassword !== '' && repassword === password) {
            setErrorRePassword('');
            setRepasswordColor('green');
        } else {
            setErrorRePassword('Passwords do not match');
            setRepasswordColor('red');
        }

        const response = await axios.post('https://localhost:7061/api/users/', {
            username: userName,
            password,
        });

        if (response.data.username) {
            dispatch(userLogin(response.data));
            navigate('/');
        }
        else {
            alert('Something went wrong');
        }
    };

    return (
        <PageLayout>
            <div className="justify-content-center d-flex">
                <div className="register-container">
                    <form className="form" onSubmit={validateForm}>
                        <h2>Register</h2>
                        <label>Username</label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            style={{ borderColor: userNameColor }}
                        />
                        <small style={{ color: userNameColor }}>{errorUserName}</small>

                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ borderColor: passwordColor }}
                        />
                        <small style={{ color: passwordColor }}>{errorPassword}</small>

                        <label>Password Confirm</label>
                        <input
                            type="password"
                            value={repassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            style={{ borderColor: repasswordColor }}
                        />
                        <small style={{ color: repasswordColor }}>{errorRePassword}</small>

                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </PageLayout>
    );
};

export default RegisterPage;
