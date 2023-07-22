import { React, useState, useContext } from 'react'
import { UserProfileContext } from './UserProfileProvider'
import './LoginForm.css'
import { useLocation, useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const { login } = useContext(UserProfileContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { email, password }
        console.log('logging in', data)
        login(data)
        const origin = location.state?.from?.pathname || '/';
        navigate(origin);
    }
    return (
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        autoComplete="username"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="box">
                    <label htmlFor='password'>Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="b">Login</button>
            </form>
    )
}

export default LoginForm
