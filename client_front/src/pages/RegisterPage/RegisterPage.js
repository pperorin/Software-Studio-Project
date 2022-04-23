import './Register.css'
import { useState } from "react"
import { PageLayout } from '../../components';

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

    const validateForm = (e) => {
        e.preventDefault()
        if (userName.length > 8) {
            setErrorUserName('')
            setUserNameColor('green')
        } else {
            setErrorUserName('ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร')
            setUserNameColor('red')
        }

        if (password.length > 8) {
            setErrorPassword('')
            setPasswordColor('green')
        } else {
            setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร')
            setPasswordColor('red')
        }

        if (repassword != "" && repassword === password) {
            setErrorRePassword('')
            setRepasswordColor('green')
        } else {
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRepasswordColor('red')
        }
    }

    return (
        <PageLayout>
            <div >
                <div className="register-container">
                    <form className="form" onSubmit={validateForm}>
                        <h2>Register</h2>

                        <label>UserName</label>
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