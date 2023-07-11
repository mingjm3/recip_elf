import { React, useState, useContext } from 'react'
import { UserProfileContext } from './UserProfileProvider'
import './LoginForm.css'

const LoginForm = () => {
    const { login } = useContext(UserProfileContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        login()
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
                <button className="b">Submit</button>
            </form>
    )
}

export default LoginForm
