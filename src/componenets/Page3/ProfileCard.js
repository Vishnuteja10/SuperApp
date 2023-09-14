import { useEffect, useState } from "react";
import "./ProfileCard.css";

function ProfileCard() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [userName, setUserName] = useState("");

  const [actionD, setActionD] = useState(false);
  const [dramaD, setDramaD] = useState(false);
  const [romanceD, setRomanceD] = useState(false);
  const [thrillerD, setThrillerD] = useState(false);
  const [westernD, setWesternD] = useState(false);
  const [horrorD, setHorrorD] = useState(false);
  const [fantasyD, setFantasyD] = useState(false);
  const [musicD, setMusicD] = useState(false);
  const [fictionD, setFictionD] = useState(false);

  let actionData;
  let dramaData;
  let romanceData;
  let thrillerData;
  let westernData;
  let horrorData;
  let fantasyData;
  let musicData;
  let fictionData;

  useEffect(() => {
    const name = localStorage.getItem("S_name");
    const userName = localStorage.getItem("S_username");
    const email = localStorage.getItem("S_email");

    actionData = localStorage.getItem("action");
    dramaData = localStorage.getItem("drama");
    romanceData = localStorage.getItem("romance");
    thrillerData = localStorage.getItem("thriller");
    westernData = localStorage.getItem("western");
    horrorData = localStorage.getItem("horror");
    fantasyData = localStorage.getItem("fantasy");
    musicData = localStorage.getItem("music");
    fictionData = localStorage.getItem("fiction");

    if (actionData) {
      setActionD(true);
    }

    if (dramaData) {
      setDramaD(true);
    }

    if (romanceData) {
      setRomanceD(true);
    }

    if (thrillerData) {
      setThrillerD(true);
    }

    if (westernData) {
      setWesternD(true);
    }

    if (horrorData) {
      setHorrorD(true);
    }

    if (fantasyData) {
      setFantasyD(true);
    }

    if (musicData) {
      setMusicD(true);
    }

    if (fictionData) {
      setFictionD(true);
    }

    if (name) {
      setName(name);
    }

    if (userName) {
      setUserName(userName);
    }

    if (email) {
      setGmail(email);
    }
  }, []);

  console.log("name is :", name);

  console.log("actionData is :", actionData);
  return (
    <div className="p3_outerBox">
      <div className="profile"></div>

      <div className="p3_leftBox">
        <div className="p3_details">
          <p className="p3_name">{name}</p>
          <p className="p3_gmail">{gmail}</p>
          <p className="p3_userName">{userName}</p>
        </div>
        <div className="p3_categories">
          {actionD ? <button>action</button> : <></>}
          {dramaD ? <button>drama</button> : <></>}
          {romanceD ? <button>romance</button> : <></>}
          {thrillerD ? <button>thriller</button> : <></>}
          {westernD ? <button>western</button> : <></>}
          {horrorD ? <button>horror</button> : <></>}
          {fantasyD ? <button>fantasy</button> : <></>}
          {musicD ? <button>music</button> : <></>}
          {fictionD ? <button>fiction</button> : <></>}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
