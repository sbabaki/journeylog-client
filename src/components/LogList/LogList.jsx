import React from "react";
import "./LogList.scss";
import { Link } from "react-router-dom";

function LogList({logList}) {
  return (
    <section className="log-list">
      <h2 className="log-list__h2">Your Logs</h2>
      <ul className="log-list__items">
        {logList.map((log)=> (
        <Link to={`/your-log/${log.id}`} className="log-list__link" key={log.id}>
          <li className="log-list__item">
            <div className="log-list__item-left">
              <img
                src={log.cities[0]?.image || "https://via.placeholder.com/150"}
                alt="Thumbnail for log"
                className="log-list__thumbnail"
              />
            </div>
            <div className="log-list__item-right">
              <p className="log-list__title">{log.name}</p>
            </div>
          </li>
        </Link>
      ))}
      </ul>
    </section>
  );
}

export default LogList;
