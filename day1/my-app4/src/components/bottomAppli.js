import React from "react";
import sunBlue from "./imgs/sunBlue.png";
import sunBlack from "./imgs/sunBlack.png";
import sunnycloud from "./imgs/sunnyCloud.png";
import cloudRain from "./imgs/cloudRain.png";
import a from "./imgs/a.png";
import b from "./imgs/b.png";
import c from "./imgs/b.png";

class BottomAppli extends React.Component {
  constructor(props) {
    super(props);
  }

  // function whichImg(weather){
  //   if (weather == sunny){
  //     img.src = {sunnycloud}
  //   }
  // }

  render() {
    return (
      <div className="bottom">
        <div className="date">
          <ul>
            <li>{this.props.day}</li>
            <li>{this.props.date}</li>
          </ul>
          <ul>
            <li>
              <img id="temps" src={this.props.weatherImg} alt="weather photo" />
            </li>
          </ul>
          <ul>
            <li>{this.props.weather}</li>
            <li>{this.props.temperature} °C</li>
          </ul>
        </div>
        <div className="details">
          <ul id="listImg">
            <li>
              <img src={a}></img>
            </li>
            <li>
              <img src={b}></img>
            </li>
            <li>
              <img src={c}></img>
            </li>
          </ul>
          <ul id="listDet">
            <li>{this.props.wind} mph </li>
            <li>{this.props.humidity} % </li>
            <li>{this.props.rain} % </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BottomAppli;
