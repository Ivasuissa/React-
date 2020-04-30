import React from "react";
import TopAppli from "./topAppli";

const LocMeteo = [
  {
    country: "Serbia",
    city: "Belgrade",
    weather2: "Sunny",
    temperature2: "19"
  }
];
class TopMeteo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {LocMeteo.map((Loc, i) => (
          <TopAppli
            country={Loc.country}
            city={Loc.city}
            weather2={Loc.weather2}
            temperature2={Loc.temperature2}
            key={i}
          />
        ))}
      </div>
    );
  }
}

export default TopMeteo;
