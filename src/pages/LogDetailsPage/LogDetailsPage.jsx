import React from "react";
import "../LogDetailsPage/LogDetailsPage.scss";
import LogList from "../../components/LogList/LogList";
import LogDetails from "../../components/LogDetails/LogDetails";

export default function LogDetailsPage() {
  return (
    <div className="log-details">
      <div className="log-details__list">
      <LogList 
      />
      </div>
      <div className="log-details__details">
      <LogDetails />
      </div>
    </div>
  );
}
