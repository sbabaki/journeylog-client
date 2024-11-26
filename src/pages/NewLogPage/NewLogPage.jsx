import React from "react";
import "./NewLogPage.scss";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";
import DatePicker from "react-datepicker";


export default function NewLogPage() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  return (
    <div className="new-log">
      <h1 className="new-log__title">New Log</h1>
      <form className="new-log__form" action="submit">
        <div className="new-log__label-field">
          <div className="new-log__label-container">
            <label htmlFor="log-name">Log Name:</label>
          </div>
          <div className="new-log__input-container">
          <input className="new-log__input" name="log-name" type="text" />
        </div>
        </div>
        <div className="new-log__cities-header">
        <h2>Cities Visited</h2>
        <button type="button" className="new-log__btn--cancel">
          + Add City
        </button>
        </div>
        <div className="new-log__label-field">
          <div className="new-log__label-container">
          <label htmlFor="city-name">City Name:</label>
          </div>
          <div className="new-log__input-container">
          <input className="new-log__input" name="city-name" type="text" />
          </div>
        </div>


        <div className="new-log__label-field">
          <div className="new-log__label-container">
          <label htmlFor="start-date">Start Date:</label>
          </div>
          <div className="new-log__input-container">
          <DatePicker
              id="start-date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="new-log__input"
              placeholderText="Select start date"
              popperPlacement="bottom-start"
            />
          </div>
        </div>


        <div className="new-log__label-field">
          <div className="new-log__label-container">
            <label htmlFor="end-date">End Date:</label>
          </div>
          <div className="new-log__input-container">
          <DatePicker
              id="end-date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="new-log__input"
              placeholderText="Select end date"
              popperPlacement="bottom-start"
            />
          </div>
        </div>

        
        <div className="new-log__action-btns">
        <button type="submit" className="new-log__btn">
          Submit Log
        </button>
        <button type="submit" className="new-log__btn--cancel">
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
}
