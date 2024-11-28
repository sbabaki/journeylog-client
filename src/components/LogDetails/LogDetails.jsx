import React from "react";
import "../LogDetails/LogDetails.scss";
import calendarIcon from "../../assets/icons/calendar-icon.png";

export default function LogDetails({ name, cities }) {
  console.log("name:", name);
  console.log("cities:", cities);
  if (!cities || cities.length === 0 || !name) {
    return <p>Loading city details...</p>;
  }
  return (
    <div className="log-details">
      <div className="log-details__heading">
        <h1 className="log-details__h1">{name}</h1>
      </div>
      {cities.map((city) => (
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
          <div className="log-details__city-bottom">
            <p>{city.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
