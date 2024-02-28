import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/index.css";

import cover from "./assets/images/composition.jpeg";
import paper from "./assets/images/paper.jpeg";

export default function IntroductionPage() {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const animationFlip = () => {
    const flipContainer = document.querySelector(".flip-container");
    const paperElement = document.querySelector(".paper");

    setIsFlipped(true);

    setTimeout(() => {
      flipContainer.style.display = "none";
      paperElement.style.position = "relative";
      paperElement.classList.add("scale-up");

      paperElement.addEventListener(
        "animationend",
        () => {
          navigate("/next-Page");
        },
        { once: true }
      );
    }, 1400);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className={`flip-container ${isFlipped ? "flip" : ""}`}>
          <div>
            <img src={cover} className="cover-front" alt="" />
            <div className="cover-back"></div>
            <h1 className="title">Doodle Pad</h1>
          </div>
          <button className="start-button" onClick={animationFlip}>
            Do you wanna draw?
          </button>
        </div>
      </div>
      <img src={paper} className="paper" alt="" />
    </div>
  );
}
