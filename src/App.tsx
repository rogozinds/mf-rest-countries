import './App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CountryPage } from './pages/CountryPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/countries/:countryid" element={<CountryPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
  );
}

export default App
