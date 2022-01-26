import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './Home.css'

const Home = () => {
  const [lastAttempt, setLastAttepmt] = useState('');

  useEffect(() => {
    const historyData = JSON.parse(localStorage.getItem('attempts'))
    historyData && setLastAttepmt(historyData[historyData.length - 1]);
  }, []);

  return (
    <div>
      <button>
        <Link to='/quiz'>Start Quiz</Link>
      </button>
      {lastAttempt && (
        <>
          <div>{`last attempt: points - ${lastAttempt.point}, points - ${lastAttempt.date}`}</div>
          <Link to='/history'>see full history</Link>
        </>
        )}
    </div>

  )
}

export default Home;