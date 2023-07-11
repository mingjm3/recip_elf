import { React, useState } from "react";
import Elfbar from "./components/Elfbar";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import "./profile.css";

function Profile() {
  const [newUser, setNewUser] = useState(true)

  //name instead of prompt
  return (
    <div className="profile">
      <div>
        <Elfbar />
      </div>
      <div className="line-4">
        <hr />
      </div>
      <div className="text">
        {newUser ? <LoginForm /> : <SignupForm />}
        <p>
          <span>{newUser ? "No account?" : "Already have an account?"}    </span>
          <button className="link-button" onClick={() => setNewUser(!newUser)}>{newUser ? "Create one" : "Log In"}</button>
        </p>
        
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
