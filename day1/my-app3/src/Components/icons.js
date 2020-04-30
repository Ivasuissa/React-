import React from "react";
import image1 from "../imgs/one.png";
import image2 from "../imgs/two.png";
import image3 from "../imgs/three.png";

const icons = [
  {
    id: "one",
    Image: image1,
    Title: "USER INTERFACE DESIGN",
    Text1: "Wireframing",
    Text2: "Protrotyping",
    Text3: "Usability testing"
  },

  {
    id: "two",
    Image: image2,
    Title: "CONCEPT AND IDEAS",
    Text1: "Conceptualization",
    Text2: "Digital Branding",
    Text3: "Product Strategy"
  },
  {
    id: "three",
    Image: image3,
    Title: "DESIGN AND BRANDING",
    Text1: "Interaction Design",
    Text2: "Graphic Design",
    Text3: "Identity Design"
  }
];

const ListIcons = () => (
  <ul className="ul-icons">
    {icons.map(item => (
      <li className="li-icons" key={item.id}>
        <img className="img-icons" src={item.Image}></img>
        <div>
          <h3>{item.Title}</h3>
        </div>
        <p>{item.Text1}</p>
        <p>{item.Text2}</p>
        <p>{item.Text3}</p>
      </li>
    ))}
  </ul>
);
// class Icons extends React.Component {
//   render() {
//     return (
//       <div className="Icons">
//         <ul id="icons-list">
//           <li className="menu-item">
//             <img src={image1}></img>
//             <h3>USER INTERFACE DESIGN </h3>
//             <h4>
//               Wireframing <br />
//               Prototyping <br />
//               Usability testing <br />
//             </h4>
//           </li>
//           <li className="menu-item">
//             <img src={image2}></img>
//             <h3>CONCEPT AND IDEAS</h3>
//             <h4>
//               Conceptualization <br />
//               Digital Branding <br />
//               UProduct Strategy <br />
//             </h4>
//           </li>
//           <li className="menu-item">
//             <img src={image3}></img>
//             <h3>DESIGN AND BRANDING</h3>
//             <h4>
//               Interaction Design <br />
//               Graphic Design <br />
//               Identity Design <br />
//             </h4>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

export default ListIcons;
