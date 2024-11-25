import React, { useState, useEffect } from "react";
import "../LogDetailsPage/LogDetailsPage.scss";
import LogList from "../../components/LogList/LogList";
import LogDetails from "../../components/LogDetails/LogDetails";
import { useParams } from "react-router-dom";


export default function LogDetailsPage() {

const [logList, setLogList] = useState([])
const [currentLog, setCurrentLog] = useState(null)
const {logId} = useParams()
const apiUrl = import.meta.env.VITE_API_URL;


useEffect(() => {
  async function fetchLogs() {
    try {
      const response = await fetch(`${apiUrl}/your-log`);
      const data = await response.json();
      console.log("Fetched logs:", data);
      setLogList(data); 
      const selectedLog = data.find((log) => log.id === parseInt(logId));
      setCurrentLog(selectedLog); 
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  }

  fetchLogs();
}, [apiUrl, logId]);


  return (
    <>
      <div className="log-details__list">
      <LogList logList={logList}
      />
      </div>
      <div className="log-details__details">
      <LogDetails />
      </div>
      </>
  );
}
