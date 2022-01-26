import { useEffect, useState } from "react";

const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    setHistoryData(JSON.parse(localStorage.getItem('attempts')));
  }, []);

  return (
    <div>
      {historyData.map((attempt) => (
        <div>
          {`poit: ${attempt.point}, date: ${attempt.date}`}
        </div>
      ))}
    </div>
  )
}

export default History;