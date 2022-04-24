import './Register.css'
import { useState } from "react"
import { PageLayout } from '../../components';

async function loginUser(credentials) {
    return fetch('https://www.mecallapi.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const RegisterPage = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')

    const [errorUserName, setErrorUserName] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRePassword, setErrorRePassword] = useState('')

    const [userNameColor, setUserNameColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [repasswordColor, setRepasswordColor] = useState('')

    
    const validateForm = async e => {
        e.preventDefault()
        if (userName.length > 8) {
            setErrorUserName('')
            setUserNameColor('green')
        } else {
            setErrorUserName('Enter a username of more than 8 characters.')
            setUserNameColor('red')
        }

        if (password.length > 8) {
            setErrorPassword('')
            setPasswordColor('green')
        } else {
            setErrorPassword('Enter a password of more than 8 characters.')
            setPasswordColor('red')
        }

        if (repassword != "" && repassword === password) {
            setErrorRePassword('')
            setRepasswordColor('green')
        } else {
            setErrorRePassword('Passwords do not match')
            setRepasswordColor('red')
        }
        const response = await loginUser({
            userName,
            password,
            repassword
        });
        console.log(response)
        console.log(userName)
        console.log(password)
        console.log(repassword)
    }

    return (
        <PageLayout>
            <div className=' justify-content-center align-self-center d-flex '>
                <div className="register-container ">
                    <form className="form" onSubmit={validateForm} >
                        <h2>Register</h2>
                        <label>Username</label>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} style={{ borderColor: userNameColor }} />
                        <small style={{ color: userNameColor }}>{errorUserName}</small>


                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderColor: passwordColor }} />
                        <small style={{ color: passwordColor }}>{errorPassword}</small>


                        <label>Password Confirm</label>
                        <input type="password" value={repassword} onChange={(e) => setRePassword(e.target.value)} style={{ borderColor: repasswordColor }} />
                        <small style={{ color: repasswordColor }}>{errorRePassword}</small>

                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </PageLayout>
    )
}

export default RegisterPage;