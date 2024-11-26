import React from "react";
import "../LogDetails/LogDetails.scss";
import calendarIcon from "../../assets/icons/calendar-icon.png";


export default function LogDetails({ name, cities }) {
  if (!cities || cities.length === 0 || !name) {
    return <p>Loading city details...</p>;
  }
  return (
      <div className="log-details">
        <div className="log-details__heading">
          <h1 className="log-details__h1">{name}</h1>
        </div>
        {cities.map((city,index) => (
        <div key={city.id} className="log-details__city">
          <div className="log-details__city-top">
            <img className="log-details__city-img" src={city.image} alt="" />
            <div className="log-details__city-info">
              <div className="log-details__overlay"></div>
              <h2 className="log-details__h2">{city.city}</h2>
              <div className="log-details__city-date">
                <img
                  className="log-details__calendar-icon"
                  src={calendarIcon}
                  alt={city.city}
                />
              </div>
            </div>
          </div>
          <div className="log-details__city-bottom">
          {city.notes.map((note, noteIndex) => (
            <p key={noteIndex}>{note.note}</p>
        ))}
          </div>
        </div>
        ))}
      </div>
  );
}
