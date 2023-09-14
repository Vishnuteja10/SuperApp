import "./PageTwoCard.css";
import { useState } from "react";

function PageTwoCard(props) {
  // const [result, setResult] = useState(false);

  const handleClick = () => {
    props.handle();
    //   if(props.name === 'Action'){
    //   props.handleAction;
    // }
    // if(props.name === 'Drama'){

    // }
  };
  const style = {
    backgroundImage: `url(${props.src})`,
  };

  const style1 = {
    backgroundColor: `${props.color}`,
  };
  return (
    <div
      onClick={handleClick}
      style={style1}
      className={`main2 ${props.action ? "main2Border" : ""}`}
    >
      <p className="cardName">{props.name}</p>
      <div style={style} className="cardImages"></div>
    </div>
  );
}

export default PageTwoCard;
