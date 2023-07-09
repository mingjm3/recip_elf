import { React, useState } from "react";
import "./HomePage.css";
import "./components/Elfbar"
import Elfbar from "./components/Elfbar";

function HomePage() {
  const [prompt, setPrompt] = useState("");
  const handleGenerate = () => {};
  const [toggle, setToggle] = useState(false);

  return (
    <body>
      <div className="home">
        <div>
        <Elfbar />
        </div>
        <div class="line-4">
          <hr />
        </div>

        <div className="prompt">
          <h1>Generate your customized recipes according to your grocery!</h1>
          <p>
            Click Generate to Recieve Chat GPT Prompt. Train the AI Bot with the
            Message
          </p>

          <div className="g">
            <button onClick={() => setToggle(!toggle)} className=" b mb-5">
              Generate
            </button>
            {toggle && (
              <p className="gText">
                Hi! My name is Stella. I am 22 years old and live in the greater
                Seattle Area. I love creating my own meals, but some times
                struggle with picking out what meal to make, having peanut and
                dairy allergies. I have listed my ingradients and expiration
                date in the ingradients Page. Can you help me make a meal plan?
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
