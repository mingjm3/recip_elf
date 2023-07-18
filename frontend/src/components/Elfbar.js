import './Elfbar.css'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../n.png";
import { Link } from "react-router-dom";

const Elfbar = () => {
    const links = [
        {
          text: "Sign Up / Log In",
          a: "/auth"
        },
        {
          text: "Recipes",
          a: "/Practice"
        },
        {
          text: "Generate Recipe",
          a: "/generate"
        }
    ]
    const linkContent = links.map(({ text, a }, i) => (<Link to={a} className="sign-up" key={i}>{text}</Link>))
    return (
        <Navbar className="nav" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img className="logo" src={logo} alt="recipelf logo, a slightly open domed lid on a plate; a cloche" />
                </Navbar.Brand>
                {linkContent}
            </Container>
        </Navbar>
    )
}

export default Elfbar
