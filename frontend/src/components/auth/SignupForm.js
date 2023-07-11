import { React, useState, useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { UserProfileContext } from "./UserProfileProvider";

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

const domainContent = SUPPORTED_EMAIL_DOMAINS.map((domain, i) => (<ListGroup.Item key={i}>{domain}</ListGroup.Item>))
const SignupForm = () => {
    const { signup, token } = useContext(UserProfileContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = useState("");
    console.log(token)
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
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
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
                    <label>List Dietary Restrictions:</label>
                    <input
                        type="text"
                        value={dietaryRestrictions}
                        onChange={(e) => setDietaryRestrictions(e.target.value)}
                    />
                </div>
                <button className="b">Submit</button>
            </form>

            <div className="email-domain-list">
                <h2 className="domain-list-title">Supported email domains:</h2>
                <ListGroup className="w-25">{domainContent}</ListGroup>
            </div>
        </>

    )
}

export default SignupForm