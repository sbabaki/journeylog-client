import React from "react";
import "./NewLogPage.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

export default function NewLogPage({ setLogList }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [city, setCity] = useState("");
  const [note, setnote] = useState("");
  const [logName, setLogName] = useState("");
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [successModal, setSuccessModal] = useState("");

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const autocompleteRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBdkXvPdOX8sdg2ZAsLjWiUHrGeS0Mxt6Y",
    libraries,
  });

  if (!isLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry) {
      setCity(place.name);
      setCoordinates({
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      });
    }
  };

  const closeModal = () => {
    setSuccessModal("");
    navigate("/your-logs");
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (!logName || !city || !startDate || !endDate) {
      alert("Please fill out all required fields.");
      return;
    }

    const logData = {
      name: logName,
      cities: [
        {
          city,
          coordinates,
          startDate,
          endDate,
          note,
        },
      ],
    };

    try {
      const response = await axios.post(`${apiUrl}/your-logs`, logData);
      setSuccessModal("Your log has been created successfully!");
    } catch (error) {
      alert("Failed to create log. Please try again.");
    }
  };


  

  return (
    <div className="new-log-bkgrnd">
      {successModal && (
        <div className="modal">
          <div className="modal__content">
            <p>{successModal}</p>
            <button className="modal__close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="new-log-container">
        <div className="new-log">
          <h1 className="new-log__title">New Log</h1>
          <form
            className="new-log__form"
            onSubmit={handleOnSubmit}
            action="submit"
          >
            <div className="new-log__label-field">
              <div className="new-log__label-container">
                <label className="new-log__label" htmlFor="log-name">
                  Log Name:
                </label>
              </div>
              <div className="new-log__input-container">
                <input
                  className="new-log__input"
                  name="log-name"
                  value={logName}
                  autoComplete="off"
                  onChange={(event) => {
                    setLogName(event.target.value);
                  }}
                  placeholder="Enter log name"
                  type="text"
                />
              </div>
            </div>
            <div className="new-log__cities-header">
              <h2>Add Your First City</h2>
            </div>
            <div className="new-log__label-field">
              <div className="new-log__label-container">
                <label className="new-log__label" htmlFor="city-name">
                  City Name:
                </label>
              </div>
              <div className="new-log__input-container">
                <Autocomplete
                  onLoad={(autocomplete) =>
                    (autocompleteRef.current = autocomplete)
                  }
                  onPlaceChanged={handlePlaceChanged}
                >
                  <input
                    className="new-log__input"
                    name="city-name"
                    placeholder="Enter city name"
                    type="text"
                  />
                </Autocomplete>
              </div>
            </div>

            <div className="new-log__label-field">
              <div className="new-log__label-container">
                <label className="new-log__label" htmlFor="note">
                  Notes:
                </label>
              </div>
              <div className="new-log__input-container">
                <textarea
                  className="new-log__input new-log__input--notes"
                  name="note"
                  onChange={(event) => setnote(event.target.value)}
                  placeholder="Enter notes"
                  type="text"
                />
              </div>
            </div>

            <div className="new-log__label-field">
              <div className="new-log__label-container">
                <label className="new-log__label" htmlFor="start-date">
                  Start Date:
                </label>
              </div>
              <div className="new-log__input-container">
                <DatePicker
                  id="start-date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="new-log__input"
                  placeholderText="Select start date"
                  popperPlacement="bottom-start"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="new-log__label-field">
              <div className="new-log__label-container">
                <label className="new-log__label" htmlFor="end-date">
                  End Date:
                </label>
              </div>
              <div className="new-log__input-container">
                <DatePicker
                  id="end-date"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="new-log__input"
                  placeholderText="Select end date"
                  popperPlacement="bottom-start"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="new-log__btns">
              <button type="submit" className="new-log__submit-btn">
                Submit
              </button>
              <Link to="/">
                <button type="button" className="new-log__cancel-btn">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
