import { React, useState, useContext } from "react";
import "./HomePage.css";
import "./components/Elfbar"
import Elfbar from "./components/Elfbar";
import { IngredientsContext } from "./components/IngredientsProvider";
import { UserProfileContext } from "./components/auth/UserProfileProvider";

function HomePage() {
  const { ingredients } = useContext(IngredientsContext)
  const { server, token } = useContext(UserProfileContext)
  const [chatResponse, setChatResponse] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleGenerate = async (e) => {
    // send ingredients to backend
    const body = {
      foods: ingredients,
      cuisines: ["Italian"],
      dietaryRestrictions: ["peanuts"]
    }
    const res = await fetch(`${server}/recipegen`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }
    });
    const data = await res.json()
    setChatResponse(data)
  };

  return (
      <div className="home">
        <div>
        <Elfbar />
        </div>
        <div className="line-4">
        </div>

        <div className="prompt">
          <h1>Generate your customized recipes according to your grocery!</h1>
          <p>
            Click Generate to Recieve Chat GPT Prompt. Train the AI Bot with the
            Message
          </p>

          <div className="g">
            <button onClick={() => {setToggle(!toggle); handleGenerate()}} className=" b mb-5">
              Generate
            </button>
            {toggle && (
              <p className="gText">
                
                {chatResponse ? chatResponse.response : 'loading'}

              </p>
            )}
          </div>
          <p className="generator"></p>
        </div>
      </div>
  );
}
export default HomePage;
