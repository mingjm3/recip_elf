import { React, useState } from "react";
import Elfbar from "./components/Elfbar";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import "./Auth.css";

function Auth() {
  const [newUser, setNewUser] = useState(true)

  //name instead of prompt
  return (
    <div className="auth">
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

export default Auth;
