import "./header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/journeylog-logo.png";
import profileIcon from "../../assets/icons/profile-icon.png";

function header() {
  return (
    <>
      <nav className="header">
        <div className="header__box1">
          <NavLink to={"/"}>
            <img src={logo} alt="journeylog-logo" className="header__logo" />
          </NavLink>
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
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `header__link ${isActive ? "header__link--active" : ""}`
              }
            >
              <p className="header__link-text">Home</p>
            </NavLink>
          </div>
          <div className="header__link-container">
            <NavLink
              to={"/your-logs"}
              className={({ isActive }) =>
                `header__link ${isActive ? "header__link--active" : ""}`
              }
            >
              <p className="header__link-text">Your Logs</p>
            </NavLink>
          </div>
          <div className="header__link-container">
            <NavLink to={"/new-log"} className={({ isActive }) =>
                `header__link ${isActive ? "header__link--active" : ""}`
              }>
              <p className="header__link-text">New Log</p>
            </NavLink>
          </div>
          <div className="header__link-container">
            <NavLink to={"/journey-map"} className={({ isActive }) =>
                `header__link ${isActive ? "header__link--active" : ""}`
              }>
              <p className="header__link-text">Map</p>
            </NavLink>
          </div>
        </div>
        <div className="header__box3"></div>
      </nav>
    </>
  );
}

export default header;
