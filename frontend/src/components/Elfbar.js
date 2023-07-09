import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../n.png";
import { Link } from "react-router-dom";

const Elfbar = () => {
    const links = [
        {
          text: "Sign-Up",
          a: "/Profile"
        },
        {
          text: "Recipes",
          a: "/Practice"
        },
        {
          text: "Ingredients",
          a: "/ingredient"
        }
    ]
    const linkContent = links.map(({ text, a }) => (<Link to={a} className="sign-up">{text}</Link>))
    return (
        <Navbar className="nav" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img className="logo" src={logo} />
                </Navbar.Brand>
                {/* <Navbar.Brand href = "profile.js">Sign-Up</Navbar.Brand> */}
                {linkContent}
            </Container>
        </Navbar>
    )
}

export default Elfbar