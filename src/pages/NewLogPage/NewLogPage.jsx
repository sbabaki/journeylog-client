import React from "react";
import "./NewLogPage.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";



export default function NewLogPage({ setLogList }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [city, setCity] = useState("");
  const [note, setnote] = useState("");
  const [logName, setLogName] = useState("");
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const autocompleteRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "hip-cyclist-443122-i7",
    libraries: ["places"],
  });

  const handlePlaceChanged = () => {
const place = autocompleteRef.current.getPlace();
if (place.geometry) {
  setCity (place.name);
  setCoordinates ({
    latitude:
  })
}
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (!city || !logName || !startDate || !endDate) {
      alert("Please fill out all fields.");
      return;
    }
    const logData = {
      name: logName,
      cities: [
        {
          city: city,
          coordinates,
          startDate,
          endDate,
          note,
        },
      ],
    };
    console.log("Data being sent to backend:", logData);

    try {
      const response = await axios.post(`${apiUrl}/your-log`, logData);
      console.log("Response from backend:", response.data);
      alert(`Your log has been created!`);
      navigate("/your-log");
    } catch (error) {}
  };

  return (
    <div className="new-log">
      <h1 className="new-log__title">New Log</h1>
      <form className="new-log__form" onSubmit={handleOnSubmit} action="submit">
        <div className="new-log__label-field">
          <div className="new-log__label-container">
            <label htmlFor="log-name">Log Name:</label>
          </div>
          <div className="new-log__input-container">
            <input
              className="new-log__input"
              name="log-name"
              value={logName}
              onChange={(event) => {
                setLogName(event.target.value);
                console.log("Log Name:", event.target.value);
              }}
              placeholder="Enter log name"
              type="text"
            />
          </div>
          <div className="new-log__action-btns"></div>
        </div>
        <div className="new-log__cities-header">
          <h2>Add Your First City</h2>
        </div>
        {successMessage && <p className="new-log__success">{successMessage}</p>}
        <div className="new-log__label-field">
          <div className="new-log__label-container">
            <label htmlFor="city-name">City Name:</label>
          </div>
          <div className="new-log__input-container">
            <input
              className="new-log__input"
              name="city-name"
              onChange={(event) => setCity(event.target.value)}
              placeholder="Enter city name"
              type="text"
            />
          </div>
        </div>

        <div className="new-log__label-field">
          <div className="new-log__label-container">
            <label htmlFor="note">notes:</label>
          </div>
          <div className="new-log__input-container">
            <textarea
              className="new-log__input"
              name="note"
              onChange={(event) => setnote(event.target.value)}
              placeholder="Enter notes"
              type="text"
            />
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
        <button type="submit" className="new-log__btn--cancel">
          Submit
        </button>
        <Link to="/">
          <button type="button" className="new-log__btn--cancel">
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
}
