import { Link } from "react-router-dom";

import './Home.css'

const Home = () => {
  return (
    <div>
      <button>
        <Link to='/quiz'>Start Quiz</Link>
      </button>
    </div>

  )
}

export default Home;