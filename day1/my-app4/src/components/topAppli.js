import React from "react";
import sunBlue from "./imgs/sunBlue.png";

class TopAppli extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top">
        <img id="sun" src={sunBlue}></img>

        <div className="text">
          <h4>{this.props.country}</h4>
          <h2>{this.props.city}</h2>
          <ul>
            <li>
              <h4>{this.props.weather2}</h4>
            </li>
            <li>
              <h4 id="temp">{this.props.temperature2}</h4>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopAppli;
