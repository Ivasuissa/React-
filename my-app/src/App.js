import React from "react";
import "./App.css";

const TravelList = [
  {
    id: "firstLoc",
    Picture:
      "https://lh3.googleusercontent.com/p/AF1QipMwTiNtaAEh1m5arhZJ3nZEv3LROaRu_2Drzbxa=w592-h404-n-k-rw-no-v1",
    Name: "Hotel The Setai, Tel Aviv",
    Localisation:
      "https://www.google.com/maps/dir//%D7%A1%D7%98%D7%90%D7%99+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+-+The+Setai,+Tel+Aviv,+David+Razi'el+St+22,+Tel+Aviv-Yafo,+6802919%E2%80%AD/@32.0552909,34.6862656,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x151d4cbe958dc353:0xe94b488852a12f3b!2m2!1d34.7563058!2d32.0553102?hl=fr"
  },
  {
    id: "secondLoc",
    Picture:
      "https://lh3.googleusercontent.com/p/AF1QipMJCxhmhfR2y3q2pWcH93IGyb1bNfaKWFS1E4Z0=w592-h404-n-k-rw-no-v1",
    Name: "Waldorf Astoria Jerusalem",
    Localisation:
      "https://www.google.com/maps/dir//Waldorf+Astoria+Jerusalem,+Gershon+Agron+St+26-28,+Jerusalem,+9419008/@31.7773841,35.1520083,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x150329d3dc03559f:0xe8536e10d92ae82f!2m2!1d35.2220485!2d31.7774033?hl=fr"
  },
  {
    id: "thirdLoc",
    Picture:
      "https://lh3.googleusercontent.com/p/AF1QipNvo-ePdjhyZmduP-LtKFC-IzUyK-BVlSfC8i9r=w592-h404-n-k-rw-no-v1",
    Name: "Crowne Plaza Jordan - Dead Sea Resort & Spa",
    Localisation:
      "https://www.google.com/maps?gl=il&hl=fr&um=1&ie=UTF-8&fb=1&sa=X&geocode=KYsuEIEVSgMVMeV35up7zv8z&daddr=Crowne+Plaza+Jordan+-+Dead+Sea+Resort+%26+Spa,+Dead+Sea+Rd.,+Swemieh+18186,+Jordanie"
  }
];
function App() {
  return (
    <ul>
      {TravelList.map(item => (
        <li key={item.id}>
          <img src={item.Picture}></img> <br />
          <div>{item.Name}</div>
          <a href={item.Localisation}> Check the localisation </a>
        </li>
      ))}
    </ul>
  );
}

export default App;
