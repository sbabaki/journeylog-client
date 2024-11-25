import React from "react";
import "../LogDetails/LogDetails.scss";
import plusIcon from "../../assets/icons/plus-icon.png"
import calendarIcon from "../../assets/icons/calendar-icon.png"
import Image from "../../../public/images/kyoto.jpg"

export default function LogDetails() {
  return (
    <>
    <div className="log-details">
        <div className="log-details__heading">
          <h1 className="log-details__h1">Trip Name 2024</h1>
          <button className="log-details__add-btn">
            <img src={plusIcon} alt="plus-icon" className="log-details__btn-icon" />
            <p className="log-details__btn-txt">Create New Log</p>
          </button>
          </div>
          <div className="log-details__city">
            <div className="log-details__city-top">
              <img className="log-details__city-img" src={Image} alt="" />
              <div className="log-details__city-info">
              <div className="log-details__overlay"></div>
                <h2 className="log-details__h2">Kampot, Cambodia</h2>
                
                <div className="log-details__city-date">
                <img className="log-details__calendar-icon" src={calendarIcon} alt="" />
                  <p>Date</p>
                </div>
              </div>
            </div>
      <div className="log-details__city-bottom">
      <p>notes</p>
      </div>
      </div>
      {/* <div className="log-details__card">
        <img src="" alt="" />
        <h3 className="log-details__card-title">Accomodation</h3>
        <div>
        <p className="log-details__card-subtitle">Restaurant A</p>
        <div className="log-details__card-rating">STARS</div>
        </div>
        <div>
          <p className="log-details__card-notes">notes</p>
        </div> */}
        
        </div>
    </>
  );
}
