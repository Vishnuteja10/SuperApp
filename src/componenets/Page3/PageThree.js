import "./PageThree.css";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import WeatherCard from "./WeatherCard";
import NotesCard from "./NotesCard";
import NewsCard from "./NewsCard";
import TimerCard from "./TimerCard";

function PageThree() {
  const navPageThree = useNavigate();
  const handleBrowse = () => {
    navPageThree("/PageFour");
  };
  return (
    <div className="page3">
      <div className="mainBox">
        <div className="box1">
          <div>
            <ProfileCard />
            <WeatherCard />
          </div>
          <div>
            <NotesCard />
          </div>
        </div>
        <div className="box2">
          <NewsCard />
        </div>
      </div>
      <div className="box3">
        <TimerCard />
      </div>
      <div>
        <button className="p3_browse" onClick={handleBrowse}>
          Browse
        </button>
      </div>
    </div>
  );
}

export default PageThree;
