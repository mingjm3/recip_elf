import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./profile.css";
import logo from "./n.png";
import { Link } from "react-router-dom";

// const [name, setName] = useState("")
//     const [age, setAge] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [location, setLocation] = useState("")
//     const [allergies, setAllergies] = useState("")
//     const [period, setPeriod] = useState("")

function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [allergies, setAllergies] = useState("");
  const [period, setPeriod] = useState("");

  //name instead of prompt
  return (
    <div className="profile">
      <div>
        <Navbar className="nav" variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="HomePage.js">
              <img className="logo" src={logo} />
            </Navbar.Brand>
            {/* <Navbar.Brand href = "profile.js">Sign-Up</Navbar.Brand> */}
            <Link to="/Practice" className="sign-up">
              Recipes
            </Link>

            <Navbar.Brand href="Profile.js" className="sign-up">
              Sign-Up
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div class="line-4">
        <hr />
      </div>

      <div className="text">
        <form>
          <div className="box">
            <label>Name:</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="box">
            <label>Age:</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
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
            <label>City, State:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="box">
            <label>List Allergies:</label>
            <input
              type="text"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
          </div>
          <div className="box">
            <label>Last Menstruation Date</label>
            <input
              type="text"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
          </div>
          <button className="b">Sumbit</button>
        </form>
      </div>
    </div>
  );
}
// const data = [
//     {name}, {age}, {email}, {password}, {location},
//     {allergies}, {period} ];
export const name = Profile.name;
export const date = Profile.date;
export default Profile;
