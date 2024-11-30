import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/journeylog-logo.png";
import profileIcon from "../../assets/icons/profile-icon.png";

function header() {
  return (
    <>
      <nav className="header">
        <div className="header__box1">
          <Link to={"/"}>
            <img src={logo} alt="journeylog-logo" className="header__logo" />
          </Link>
          <div className="header__profile-section">
            <img
              src={profileIcon}
              alt="profile-icon"
              className="header__profile-icon"
            />
            <p>Hi, Shay!</p>
          </div>
        </div>
        <div className="header__box2">
          <div className="header__link-container">
            <Link to={"/your-logs"} className="header__link">
              <p className="header__link-text">Your Logs</p>
            </Link>
          </div>
          <div className="header__link-container">
            <Link to={"/new-log"} className="header__link">
              <p className="header__link-text"> Create New Log</p>
            </Link>
          </div>
          <div className="header__link-container">
            <Link to={"/journey-map"} className="header__link">
              <p className="header__link-text">Map</p>
            </Link>
          </div>
        </div>
        <div className="header__box3"></div>
      </nav>
    </>
  );
}

export default header;
