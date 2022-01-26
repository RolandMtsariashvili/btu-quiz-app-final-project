import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Quiz app</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
