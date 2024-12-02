import "./Homepage.scss";
import logIcon from "../../assets/icons/log.png";
import mapIcon from "../../assets/icons/map.png";
import shareIcon from "../../assets/icons/share.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <section className="hero">
        <div className="hero__img"></div>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__title">Mark Your Travel Footprint.</h1>
          <Link to={"/new-log"}>
          <button className="hero__button">Create New Log</button>
          </Link>
        </div>
      </section>
      <section className="body">
        <div className="body__intro">
          <h2>Your Virtual Travel Map</h2>
          <p>JourneyLog lets you track, visualize, and share your journeys.</p>
        </div>
        <div className="body__features">
        <div className="body__feature">
          <div className="body__icon-bkgrnd">
            <img
              className="body__icon"
              src={logIcon}
              alt="icon-pen-paper-log"
            />
          </div>
          <h3>Log Your Travels</h3>
          <p>Record your notes, add trips, and build a visual timeline.</p>
        </div>
        <div className="body__feature">
          <div className="body__icon-bkgrnd">
            <img className="body__icon" src={mapIcon} alt="map-pin-icon" />
          </div>
          <h3>Visualize Your Journeys</h3>
          <p>Explore Your travel history on an interactive map.</p>
        </div>
        <div className="body__feature">
          <div className="body__icon-bkgrnd">
            <img
              className="body__icon"
              src={shareIcon}
              alt="friends-network-icon"
            />
          </div>
          <h3>Share Your Experiences</h3>
          <p>Inspire the journeys of others by sharing your logs.</p>
        </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
