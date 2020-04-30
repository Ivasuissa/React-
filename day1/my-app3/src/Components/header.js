import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <ul id="header-list">
          <li className="menu-item">Services</li>
          <li className="menu-item">Work</li>
          <li id="underline" className="menu-item">The Team</li>
          <li id="logo">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAY1BMVEX/////YrD/Wq3/Xq7/V6z/5fH/Taj/6PP/+/3/xeD/+Pz/VKv/sNX/udr/h8H/6vT/abT/0+j/wd7/pM//erv/3+7/2Or/tdj/k8f/crj/7/f/y+P/gr//rNP/9Pr/nMv/Mp/6dyfXAAAD5ElEQVRoge1Z69KiMAyVNNwEKiDI/XPf/ym3CVQRFXW+4uzs9PwTK6fN5SSNu52FhYWFhYWFhYWFhYWFhYXF/4g2y+Pj8Rjn2eHLzH7SoxchEDDysEjcb1HvO+mAcOYQ4Mjw5wvcQVcgOPcQ2IT7rclLOR1bCBBiPLd+Av1pW/IKJkZP1ElW+ge/zJKz4+nHw4bcQRNNRh78my/auEDmx2Yz77sFOxyL/N7B+278EppyI/JGsL+Tx8G1zx3iF+km9P5I3j9/uSuZvtki93t6dVSvZVVwpriAwnzm8bnwVUxXyPSmyTs6VXR8ua7idblZ8kOqnC7kGytrDn3/9cIPcFbvFEX7xsp9r/YJtUnyksIds+lTV9crbz9x4JvUXDInaKcfla6uRUBMi2VgjNwlV6ZTE5FFrCnPFbUlYRDmNCfG69H3BQv6WlhXs+UGQIQwKdgJx3LaP1/esuKZkhwy/CXbKpy6iRXTUpgYM32iXobh9OE4NTZwfv4DCg1jpb5Whvd0rmt2saLme2/dNR+BdA70h3yyPCbv/uKXiOYnccezQ72W0GwtMxlPdpx5mTNuze4Kg9qiZ+aS4RN7dfmYeS9iTiEndjNBXxL7zMvc40D2/Ae7XajYIzNSv2Q/OaSkzVrBM8juLti5jKyHHVveDHvrLWQ7GLusFSWvzPk9IO24Keg/HPd4fRYuzknNiGdI6MnN6c2TMuXIqyffJ5GQ3dwRtLvIDPmuv9eOki9O0IT0mMJQYB9el5A+NYbYhwcRnPHp1bW1C8Y7juIvdBaWy0j5DTLx4GUnwZIroibVkwTUEsS9VWeIfa8Od99Ktf3UZ1wGCBjP17/TAL+F87zAXzc1LOYn2jsZGu2pM+pV+nt1yeR8iAJ6hVSbQlOG1zeEu8PTEOc6QAI9OOjgZQ38DCFSCj1sot2j40WIHg4THze9q73HxyBjRs/eeOjymdidaaeFucvEbow7eKtshCzC5ry+G635xPILsAjieu/xKegW+aKdmRbyTVuYHV5QvYY3RgIjOa72PZ+DRwKvu0RV65zHqfkbtOpIWm0O2bO5RCs582cNqBmQ1tHN6OcUyxSd+JGE/1Qpjw3AaKYT6PYESV43PBAWkA7LkdwhbmAsuUZzjdGzO1HooiIAZFVqQQnKRMI0pt1gUOnPC9m0BYGeJ5peykZ43kitFH+LEXUI1zOnsga47kRc7OEA1JtMaOsxnNAphk6lXVY7eFvYyRRObTjLNUCoLqo4d772tFupwgraB8oiTh9v9beQ/wdk7i6K1iEbVApEUQSNZItsBfdr/3ZZWFhYWFhYWFhYWFhYWFhY/FP4C+Q/J257KjdZAAAAAElFTkSuQmCC"></img>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
