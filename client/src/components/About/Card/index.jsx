/* eslint-disable  */
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/github.png";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const MapAbout = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleclick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
      cardZIndex="auto"
    >
      <div className="card-front">
        <img
          src={props.member.profilePic}
          alt="picture"
          className="profilePic"
        />
        <div className="information">
          <span className="name">{props.member.firstName}</span>
          <span className="name">{props.member.lastName}</span>
        </div>
        <div className="networks">
          <a href={props.member.linkedin}>
            <img className="icon" src={linkedin} />
          </a>
          <a href={props.member.github}>
            <img className="icon" src={github} />
          </a>
        </div>
        <BsFillCaretDownFill onClick={handleclick} className="goToBack" />
      </div>
      <div className="card-back">
        <BsFillCaretUpFill onClick={handleclick} className="goToFront" />
        <div className="body-back">{props.member.about}</div>
      </div>
    </ReactCardFlip>
  );
};

export default MapAbout;