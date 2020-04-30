import React from "react";
import BottomAppli from "./bottomAppli";
import sunBlack from "./imgs/sunBlack.png";
import sunnyCloud from "./imgs/sunnyCloud.png";
import cloudRain from "./imgs/cloudRain.png";

const detailsWeather = [
  {
    day: "mo",
    date: "16.02",
    weather: "Sunny",
    temperature: "19",
    wind: "4",
    humidity: "63",
    rain: "14",
    windImg: "/imgs/a.png",
    humidityImg: "/imgs/b.png",
    rainImg: "../imgs/c.png",
    weatherImg:  sunBlack 
  },
  {
    day: "tu",
    date: "17.02",
    weather: "Rain",
    temperature: "14",
    wind: "4",
    humidity: "63",
    rain: "14",
    windImg: "../imgs/a.png",
    humidityImg: "/imgs/b.png",
    rainImg: "/imgs/c.png",
    weatherImg:  cloudRain 
  },
  {
    day: "we",
    date: "18.02",
    weather: "Cloudy",
    temperature: "17",
    wind: "4",
    humidity: "63",
    rain: "14",
    windImg: "/imgs/a.png",
    humidityImg: "/imgs/b.png",
    rainImg: "/imgs/c.png",
    weatherImg: sunnyCloud 
  }
];

class BottomMeteo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {detailsWeather.map((detailWeather, i) => (
          <BottomAppli
            day={detailWeather.day}
            date={detailWeather.date}
            weather={detailWeather.weather}
            temperature={detailWeather.temperature}
            wind={detailWeather.wind}
            humidity={detailWeather.humidity}
            rain={detailWeather.rain}
            windImg={detailWeather.windImg}
            humidityImg={detailWeather.humidityImg}
            rainImg={detailWeather.rainImg}
            weatherImg={detailWeather.weatherImg}
            key={i}
          />
        ))}
      </div>
    );
  }
}
export default BottomMeteo;
