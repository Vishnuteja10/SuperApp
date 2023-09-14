import "./PageTwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import image1 from "./image2.png";
import image2 from "./image3.png";
import image3 from "./image4.png";
import image4 from "./image6.png";
import image5 from "./image7.png";
import image6 from "./image8.png";
import image7 from "./image9.png";
import image8 from "./image10.png";
import image9 from "./image11.png";

import { useNavigate } from "react-router-dom";

import PageTwoCard from "./PageTwoCard";

function PageTwo() {
  const [action, setAction] = useState(false);
  const [drama, setDrama] = useState(false);
  const [romance, setRomance] = useState(false);
  const [thriller, setThriller] = useState(false);
  const [western, setWestern] = useState(false);
  const [horror, setHorror] = useState(false);
  const [fantasy, setFantasy] = useState(false);
  const [music, setMusic] = useState(false);
  const [fiction, setFiction] = useState(false);

  const [count, setCount] = useState(0);

  const navigate2 = useNavigate();

  console.log("count is ", count);

  const handleNextPage = () => {
    if (action) {
      localStorage.setItem("action", action);
    } else {
      localStorage.removeItem("action");
    }

    if (drama) {
      localStorage.setItem("drama", drama);
    } else {
      localStorage.removeItem("drama");
    }

    if (romance) {
      localStorage.setItem("romance", romance);
    } else {
      localStorage.removeItem("romance");
    }

    if (thriller) {
      localStorage.setItem("thriller", thriller);
    } else {
      localStorage.removeItem("thriller");
    }

    if (western) {
      localStorage.setItem("western", western);
    } else {
      localStorage.removeItem("western");
    }

    if (horror) {
      localStorage.setItem("horror", horror);
    } else {
      localStorage.removeItem("horror");
    }

    if (fantasy) {
      localStorage.setItem("fantasy", fantasy);
    } else {
      localStorage.removeItem("fantasy");
    }

    if (music) {
      localStorage.setItem("music", music);
    } else {
      localStorage.removeItem("music");
    }

    if (fiction) {
      localStorage.setItem("fiction", fiction);
    } else {
      localStorage.removeItem("fiction");
    }
    navigate2("/PageThree");
  };

  const handleAction = () => {
    setAction(!action);
    console.log("action is", action);
    if (!action) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleDrama = () => {
    setDrama(!drama);
    console.log("drama is", drama);
    if (!drama) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleRomance = () => {
    setRomance(!romance);
    console.log("romance is", romance);
    if (!romance) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleThriller = () => {
    setThriller(!thriller);
    if (!thriller) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleWestern = () => {
    setWestern(!western);
    if (!western) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleHorror = () => {
    setHorror(!horror);
    if (!horror) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleFantasy = () => {
    setFantasy(!fantasy);
    if (!fantasy) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleMusic = () => {
    setMusic(!music);
    if (!music) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleFiction = () => {
    setFiction(!fiction);
    if (!fiction) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="page2Main">
      <div className="page2LeftBox">
        <p className="page2Head">Super app</p>
        <p className="catText">Choose your entertainment category</p>

        <div className="categoryButtons">
          <button
            onClick={handleAction}
            className={`btn ${action ? "" : "btnN"}`}
          >
            Action <span className="x"> X</span>
          </button>
          <button
            onClick={handleDrama}
            className={`btn ${drama ? "" : "btnN"}`}
          >
            Drama <span className="x"> X</span>
          </button>
          <button
            onClick={handleRomance}
            className={`btn ${romance ? "" : "btnN"}`}
          >
            Romance <span className="x"> X</span>
          </button>
          <button
            onClick={handleThriller}
            className={`btn ${thriller ? "" : "btnN"}`}
          >
            Thriller <span className="x"> X</span>
          </button>
          <button
            onClick={handleWestern}
            className={`btn ${western ? "" : "btnN"}`}
          >
            Western <span className="x"> X</span>
          </button>
          <button
            onClick={handleHorror}
            className={`btn ${horror ? "" : "btnN"}`}
          >
            Horror <span className="x"> X</span>
          </button>
          <button
            onClick={handleFantasy}
            className={`btn ${fantasy ? "" : "btnN"}`}
          >
            Fantasy <span className="x"> X</span>
          </button>
          <button
            onClick={handleMusic}
            className={`btn ${music ? "" : "btnN"}`}
          >
            Music <span className="x"> X</span>
          </button>
          <button
            onClick={handleFiction}
            className={`btn ${fiction ? "" : "btnN"}`}
          >
            Fiction <span className="x"> X</span>
          </button>
        </div>

        <div className={`warningBox ${count > 2 ? "btnN" : ""}`}>
          <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
          Minimum 3 categories required
        </div>
      </div>
      <div className="page2RightBox">
        <div>
          <div className="row1">
            <PageTwoCard
              action={action}
              handle={handleAction}
              color="#FF5209"
              src={image1}
              name={"Action"}
            />
            <PageTwoCard
              action={drama}
              handle={handleDrama}
              color="#D7A4FF"
              src={image2}
              name={"Drama"}
            />
            <PageTwoCard
              action={romance}
              handle={handleRomance}
              color="#148A08"
              src={image3}
              name={"Romance"}
            />
          </div>

          <div className="row1">
            <PageTwoCard
              action={thriller}
              handle={handleThriller}
              color="#84C2FF"
              src={image4}
              name={"Thriller"}
            />
            <PageTwoCard
              action={western}
              handle={handleWestern}
              color="#902500"
              src={image5}
              name={"Western"}
            />
            <PageTwoCard
              action={horror}
              handle={handleHorror}
              color="#7358FF"
              src={image6}
              name={"Horror"}
            />
          </div>

          <div className="row1">
            <PageTwoCard
              action={fantasy}
              handle={handleFantasy}
              color="#FF4ADE"
              src={image7}
              name={"Fantasy"}
            />
            <PageTwoCard
              action={music}
              handle={handleMusic}
              color="#E61E32"
              src={image8}
              name={"Music"}
            />
            <PageTwoCard
              action={fiction}
              handle={handleFiction}
              color="#6CD061"
              src={image9}
              name={"Fiction"}
            />
          </div>
        </div>
        <button className="nxtBtn" onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default PageTwo;
