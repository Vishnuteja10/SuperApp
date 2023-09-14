import { useEffect, useState } from "react";
import "./WeatherCard.css";

function WeatherCard() {
  const apiKey = "686bb6f82b22474781c72118232806";

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=686bb6f82b22474781c72118232806&q=Hyderabad&aqi=yes"
        );
        if (response.ok) {
          const {
            current: {
              condition: { icon, text },
              temp_c,
              pressure_mb,
              wind_kph,
              humidity,
            },
            location: { localtime },
          } = await response.json();
          setDetails({
            icon,
            text,
            temp_c,
            pressure_mb,
            wind_kph,
            humidity,
            localtime,
          });
          console.log("icon is :", icon);
          console.log("text is :", text);
          console.log("temp_c is :", temp_c);
          console.log("pressure is :", pressure_mb);
          console.log("wind kph is :", wind_kph);
          console.log("humidity is :", humidity);
          console.log("localtime is :", localtime);
        } else {
          console.log("Error:", response.statusText);
        }
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    fetchWeatherData();
  }, []);

  const { icon, text, temp_c, pressure_mb, wind_kph, humidity, localtime } =
    details || {};

  console.log(icon);

  const image = "https:" + icon;
  console.log(image);

  const divStyle = {
    backgroundImage: `url(${image}})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: `10vw`,
    height: `5vh`,
  };
  return (
    <div className="p3_weatherCard">
      <div className="p3_DT">
        <p className="lt">{localtime}</p>
      </div>
      <div className="p3_WD">
        <div className="w">
          <div style={divStyle}></div>
          <p>{text}</p>
        </div>{" "}
        |
        <div className="tp">
          <p className="temp">{temp_c} C</p>
          <p className="pressure">
            {pressure_mb} mbar <br></br>pressure
          </p>
        </div>{" "}
        |
        <div className="wh">
          <p className="wind">
            {wind_kph} km/h <br></br> wind
          </p>
          <p className="humidity">
            {humidity}% <br></br>humidity
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
