import React from "react";
import "./LogList.scss";
import { NavLink } from "react-router-dom";
import plusIcon from "../../assets/icons/plus-icon.png";

function LogList({ logList }) {
  return (
    <section className="log-list">
      <div className="log-list__top">
        <h1 className="log-list__h2">Your Logs</h1>
        <NavLink className="log-list__btn-link" to={"/new-log"}>
          <button className="log-list__add-btn">
            <img
              src={plusIcon}
              alt="plus-icon"
              className="log-list__btn-icon"
            />
            <p className="log-list__btn-txt"> Add New Log</p>
          </button>
        </NavLink>
      </div>
      <div className="log-list__instr">
      <p>Select a log below to view its details.</p>
      </div>
      <ul className="log-list__items">
        {logList.map((log) => (
          <NavLink
            to={`/your-logs/${log.id}`}
            className="log-list__link"
            key={log.id}
          >
            <li className="log-list__item">
              <div className="log-list__item-left">
                <img
                  src={
                    log.cities[0]?.image
                  }
                  alt="Thumbnail for log"
                  className="log-list__thumbnail"
                />
                
              </div>
              <div className="log-list__item-right">
                <p className="log-list__title">{log.name}</p>
              </div>
            </li>
          </NavLink>
        ))}
      </ul>
    </section>
  );
}

export default LogList;
