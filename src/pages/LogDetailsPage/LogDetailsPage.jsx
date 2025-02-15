import React, { useState, useEffect } from "react";
import "../LogDetailsPage/LogDetailsPage.scss";
import LogList from "../../components/LogList/LogList";
import LogDetails from "../../components/LogDetails/LogDetails";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function LogDetailsPage() {
  const [logList, setLogList] = useState([]);
  const [currentLog, setCurrentLog] = useState(null);
  const { logId } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchLogs() {
      try {
        const response = await axios.get(`${apiUrl}/your-logs`);
        const data = response.data;
        setLogList(data);
        const selectedLog = data.find((log) => log.id === logId);
        setCurrentLog(selectedLog || null);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    }

    fetchLogs();
  }, [apiUrl, logId]);

  const handleLogClick = (log) => {
    setCurrentLog(log);
  };

  return (
    <div className="log-details-page">
      <div className="log-details__list">
        <LogList logList={logList} onLogClick={handleLogClick} />
      </div>
      <div className="log-details__details">
        {currentLog ? (
          <LogDetails
            name={currentLog.name}
            cities={currentLog.cities}
            startDate={currentLog.startDate}
            endDate={currentLog.endDate}
            note={currentLog.note}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
