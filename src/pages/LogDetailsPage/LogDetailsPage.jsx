import React, { useState, useEffect } from "react";
import "../LogDetailsPage/LogDetailsPage.scss";
import LogList from "../../components/LogList/LogList";
import LogDetails from "../../components/LogDetails/LogDetails";
import { useParams } from "react-router-dom";

export default function LogDetailsPage() {
  const [logList, setLogList] = useState([]);
  const [currentLog, setCurrentLog] = useState(null);
  const { logId } = useParams();
  console.log("logId from URL:", logId);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchLogs() {
      try {
        const response = await fetch(`${apiUrl}/your-log`);
        if (!response.ok) throw new Error("Failed to fetch logs.");
        const data = await response.json();
        setLogList(data);

        const selectedLog = data.find((log) => log.id === logId);
        console.log("logId from URL:", logId);
        console.log("Logs fetched from backend:", data);
        setCurrentLog(selectedLog || null);
        console.log("Current Log Details:", currentLog);

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
          <LogDetails name={currentLog.name} cities={currentLog.cities} startDate={currentLog.startDate} endDate={currentLog.endDate} note={currentLog.note} />
        ) : (
          <p>Select a log to view its details.</p>
        )}
      </div>
    </div>
  );
}
