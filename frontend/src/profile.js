import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Elfbar from "./components/Elfbar";
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
      <Elfbar links={[
          {
            text: "Recipes",
            a: "/Practice"
          },
          {
            text: "Ingredients",
            a: "/ingredient"
          }]}
      />
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
            <label>List Allergies:</label>
            <input
              type="text"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
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
