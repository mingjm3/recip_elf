import { React, useState, useContext } from "react";
import "./HomePage.css";
import "./components/Elfbar"
import Elfbar from "./components/Elfbar";
import { IngredientsContext } from "./components/IngredientsProvider";

function HomePage() {
  const { ingredients } = useContext(IngredientsContext)
  const [chatResponse, setChatResponse] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleGenerate = async (e) => {
    // send ingredients to backend
    const body = {
      foods: ingredients,
      cuisines: ["Italian"],
      dietaryRestrictions: ["peanuts"]
    }
    const res = await fetch("http://localhost:3000/recipegen", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json"
      }
    });
    const data = await res.json()
    setChatResponse(data)
  };

  return (
    <body>
      <div className="home">
        <div>
        <Elfbar />
        </div>
        <div className="line-4">
          <hr />
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
                
                {chatResponse ? chatResponse.response.replace('\n','<br>') : 'loading'}

              </p>
            )}
          </div>
          <p className="generator"></p>
        </div>
      </div>
    </body>
  );
}
export default HomePage;
