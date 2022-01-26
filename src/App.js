import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import History from './pages/History';

import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Quiz app</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
