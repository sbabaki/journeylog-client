import React from "react";
import "./NewLogPage.scss"
import DatePicker from "react-datepicker";


export default function NewLogPage() {
  return (
    <div className="new-log">
      <h1 className="new-log__title">New Log</h1>
      <form className="new-log__form" action="submit">
        <div className="new-log__label-field">
          <div className="new-log__label-container">
            <label htmlFor="new-log__label">Log Name:</label>
          </div>
          <div className="new-log__input-container">
          <input className="new-log__input" type="text" />
        </div>
        </div>
        <div className="new-log__label-field">
          <div className="new-log__label-container">
          <label htmlFor="new-log__label">Start Date:</label>
          </div>
          <div className="new-log__input-container">
          <input className="new-log__input" type="text" />
          </div>
        </div>
        <div className="new-log__label-field">
          <div className="new-log__label-container">
            <label htmlFor="new-log__label">End Date:</label>
          </div>
          <div className="new-log__input-container">
          <input className="new-log__input" type="text" />
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
