import React from "react";
import "./LogList.scss";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/images/kyoto.jpg"

function LogList() {
  return (
    <section className="log-list">
      <h2 className="log-list__h2">Your Logs</h2>
      <ul className="log-list__items">
        <Link to="/your-log/:id" className="log-list__link">
          <li className="log-list__item">
            <div className="log-list__item-left">
              <img
                src={thumbnail}
                alt="Thumbnail for log"
                className="log-list__thumbnail"
              />
            </div>
            <div className="log-list__item-right">
              <p className="log-list__title">Log Name</p>
            </div>
          </li>
        </Link>
      </ul>
    </section>
  );
}

export default LogList;
