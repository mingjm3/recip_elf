import { React, useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import './SignupForm.css'

// see api/lib/auth/password.js
const SUPPORTED_EMAIL_DOMAINS = [
    '@gmail.com',
    '@icloud.com',
    '@outlook.com',
    '@hotmail.com',
    '@yahoo.com',
    '@live.com',
    '@proton.me',
    '@protonmail.com',
    '.edu'
]

const SignupForm = () => {
    const { signup } = useContext(UserProfileContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup({ name, email, password, dietaryRestrictions: dietaryRestrictions.split(',') })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <label>Name:</label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="box">
                    <label>Email:
                        <span>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <small className="email-domain-list">
                                Supported domains: {SUPPORTED_EMAIL_DOMAINS.join(', ')}
                            </small>
                        </span>

                    </label>
                </div>
                <div className="box">
                    <label>Password:</label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="box">
                    <label>List Dietary Restrictions:
                        <input
                            type="text"
                            value={dietaryRestrictions}
                            onChange={(e) => setDietaryRestrictions(e.target.value)}
                        />
                    </label>
                </div>
                <button className="b">Submit</button>
            </form>
        </>
    )
}

export default SignupForm
