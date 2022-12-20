import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import MiscPage from './MiscPage';
import { BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/misc" element={<MiscPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
    
  )
}

export default App;
