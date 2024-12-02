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
        <h2 className="log-details__h2">{name}</h2>
      </div>
      <div className="log-details__cards">
      {cities.map((city) => (
        <div key={city.id} className="log-details__card">
          <div className="log-details__card-top">
            <img className="log-details__card-img" src={city.image} alt="" />
            <div className="log-details__card-info">
              
              <div className="log-details__overlay"></div>
              <h3 className="log-details__h3">{city.city}</h3>
              <div className="log-details__card-date">
                <img
                  className="log-details__calendar-icon"
                  src={calendarIcon}
                  alt={city.city}
                />
                <p>
                  {city.startDate
                    ? new Date(city.startDate).toLocaleDateString()
                    : "Start date not available"}{" "}
                  -{" "}
                  {city.endDate
                    ? new Date(city.endDate).toLocaleDateString()
                    : "End date not available"}
                </p>
              </div>
            </div>
          </div>
          <div className="log-details__card-bottom">
            <p>{city.note}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
