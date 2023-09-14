import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageFour.css";

function PageFour() {
  const [result, setResult] = useState([]);

  const [actionP4, setActionP4] = useState(false);
  const [dramaP4, setDramaP4] = useState(false);
  const [romanceP4, setRomanceP4] = useState(false);
  const [thrillerP4, setThrillerP4] = useState(false);
  const [westernP4, setWesternP4] = useState(false);
  const [horrorP4, setHorrorP4] = useState(false);
  const [fantasyP4, setFantasyP4] = useState(false);
  const [musicP4, setMusicP4] = useState(false);
  const [fictionP4, setFictionP4] = useState(false);

  const navp4 = useNavigate();

  let actionData;
  let dramaData;
  let romanceData;
  let thrillerData;
  let westernData;
  let horrorData;
  let fantasyData;
  let musicData;
  let fictionData;

  let base_url = "https://image.tmdb.org/t/p/original/";

  let action = [];
  let drama = [];
  let comedy = []; //35
  let family = []; //10751
  let fantasy = []; //14
  let horror = []; //27
  let romance = []; //10749
  let fiction = []; //878
  let thriller = []; //53

  const redirectProfile = () => {
    navp4("/PageTwo");
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDYzNzNiZWUzNzY0YjMwYmIzZjgxZTU2NWQ1ZjMwYiIsInN1YiI6IjY0OWY5MDcwMGNiMzM1MDBlMTk0YWVkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._vK9EEURDd2FPw3GoXJ90Al7oLATPwy8H8jToOySpPQ",
    },
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=thriller%2Cdrama%2Chorror%2Cfamily%2Cromance%2Cfantasy%2Caction%2Ccomedy",
          options
        );

        if (response.ok) {
          const { results } = await response.json();

          console.log("results are :", results);
          setResult(results);
        } else {
          console.log("Error", response.statusText);
        }
      } catch (error) {
        console.log("error is ", error);
      }
    };
    fetchMovieData();

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
      setActionP4(true);
    }

    if (dramaData) {
      setDramaP4(true);
    }

    if (romanceData) {
      setRomanceP4(true);
    }

    if (thrillerData) {
      setThrillerP4(true);
    }

    if (westernData) {
      setWesternP4(true);
    }

    if (horrorData) {
      setHorrorP4(true);
    }

    if (fantasyData) {
      setFantasyP4(true);
    }

    if (musicData) {
      setMusicP4(true);
    }

    if (fictionData) {
      setFictionP4(true);
    }
  }, []);

  console.log("result is", result);

  const Actions = () => {
    action = result.filter(({ genre_ids }) => genre_ids.includes(28));

    console.log("actions array is:", action);
    const trimmedAction = action.slice(0, 4);
    console.log(trimmedAction);

    return trimmedAction.map((item) => (
      <div
        style={{ backgroundImage: `url(${base_url}${item.poster_path})` }}
        className="d"
        key={item.title}
      >
        {console.log("items title is:", item.title)}
      </div>
    ));
  };

  const Drama = () => {
    drama = result.filter(({ genre_ids }) => genre_ids.includes(18));

    console.log("actions array is:", action);
    const trimmedAction = drama.slice(0, 4);
    console.log(trimmedAction);

    return trimmedAction.map((item) => (
      <div
        style={{ backgroundImage: `url(${base_url}${item.poster_path})` }}
        className="d"
        key={item.title}
      >
        {console.log("items title is:", item.title)}
      </div>
    ));
  };

  const Western = () => {
    comedy = result.filter(({ genre_ids }) => genre_ids.includes(35));

    console.log("actions array is:", action);
    const trimmedAction = comedy.slice(0, 4);
    console.log(trimmedAction);

    return trimmedAction.map((item) => (
      <div
        style={{ backgroundImage: `url(${base_url}${item.poster_path})` }}
        className="d"
        key={item.title}
      >
        {console.log("items title is:", item.title)}
      </div>
    ));
  };

  const Family = () => {
    family = result.filter(({ genre_ids }) => genre_ids.includes(10751));

    console.log("actions array is:", action);
    const trimmedAction = family.slice(0, 4);
    console.log(trimmedAction);

    return trimmedAction.map((item) => (
      <div
        style={{ backgroundImage: `url(${base_url}${item.poster_path})` }}
        className="d"
        key={item.title}
      >
        {console.log("items title is:", item.title)}
      </div>
    ));
  };

  const Fantasy = () => {
    fantasy = result.filter(({ genre_ids }) => genre_ids.includes(14));

    console.log("actions array is:", action);
    const trimmedAction = fantasy.slice(0, 4);
    console.log(trimmedAction);

    return trimmedAction.map((item) => (
      <div
        style={{ backgroundImage: `url(${base_url}${item.poster_path})` }}
        className="d"
        key={item.title}
      >
        {console.log("items title is:", item.title)}
      </div>
    ));
  };

  const Horror = () => {
    horror = result.filter(({ genre_ids }) => genre_ids.includes(27));

    console.log("actions array is:", action);
    const trimmedAction = horror.slice(0, 4);
    console.log(trimmedAction);

    return trimmedAction.map((item) => (
      <div
        style={{ backgroundImage: `url(${base_url}${item.poster_path})` }}
        className="d"
        key={item.title}
      >
        {console.log("items title is:", item.title)}
      </div>
    ));
  };

  const Romance = () => {
    romance = result.filter(({ genre_ids }) => genre_ids.includes(10749));

    console.log("actions array is:", action);
    const trimmedAction = romance.slice(0, 4);
    console.log(trimmedAction);

    return trimmedAction.map((item) => (
      <div
        style={{ backgroundImage: `url(${base_url}${item.poster_path})` }}
        className="d"
        key={item.title}
      >
        {console.log("items title is:", item.title)}
      </div>
    ));
  };

  const Fiction = () => {
    fiction = result.filter(({ genre_ids }) => genre_ids.includes(878));

    console.log("actions array is:", action);
    const trimmedAction = fiction.slice(0, 4);
    console.log(trimmedAction);

    return trimmedAction.map((item) => (
      <div
        style={{ backgroundImage: `url(${base_url}${item.poster_path})` }}
        className="d"
        key={item.title}
      >
        {console.log("items title is:", item.title)}
      </div>
    ));
  };

  const Thriller = () => {
    thriller = result.filter(({ genre_ids }) => genre_ids.includes(53));

    console.log("actions array is:", action);
    const trimmedAction = thriller.slice(0, 4);
    console.log(trimmedAction);

    return trimmedAction.map((item) => (
      <div
        style={{ backgroundImage: `url(${base_url}${item.poster_path})` }}
        className="d"
        key={item.title}
      >
        {console.log("items title is:", item.title)}
      </div>
    ));
  };

  return (
    <div className="p4_outerBox">
      <div className="p4_headerBox">
        <div className="p4_head"> Super app</div>
        <div className="prof" onClick={redirectProfile}></div>
      </div>
      <p className="p4_head2">Entertainment according to your choice</p>
      <div className="p4_main_box">
        {actionP4 ? (
          <div className="p4_div">
            <p>action</p>
            <div className="p4_images">{Actions()}</div>
          </div>
        ) : (
          <></>
        )}
        {dramaP4 ? (
          <div className="p4_div">
            <p>Drama</p>
            <div className="p4_images">{Drama()}</div>
          </div>
        ) : (
          <></>
        )}
        {romanceP4 ? (
          <div className="p4_div">
            <p>Romance</p>
            <div className="p4_images">{Romance()}</div>
          </div>
        ) : (
          <></>
        )}
        {thrillerP4 ? (
          <div className="p4_div">
            <p>Thriller</p>
            <div className="p4_images">{Thriller()}</div>
          </div>
        ) : (
          <></>
        )}
        {westernP4 ? (
          <div className="p4_div">
            <p>Western</p>
            <div className="p4_images">{Western()}</div>
          </div>
        ) : (
          <></>
        )}
        {horrorP4 ? (
          <div className="p4_div">
            <p>Horror</p>
            <div className="p4_images">{Horror()}</div>
          </div>
        ) : (
          <></>
        )}
        {fantasyP4 ? (
          <div className="p4_div">
            <p>Fantasy</p>
            <div className="p4_images">{Fantasy()}</div>
          </div>
        ) : (
          <></>
        )}
        {musicP4 ? (
          <div className="p4_div">
            <p>Music</p>
            <div className="p4_images">{Family()}</div>
          </div>
        ) : (
          <></>
        )}
        {fictionP4 ? (
          <div className="p4_div">
            <p>Fiction</p>
            <div className="p4_images">{Fiction()}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default PageFour;
