import { HashRouter, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import Homepage from './Homepage';
import ProjectPage from './pages/ProjectPage';
import ScrollToTop from './ScrollToTop';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <ScrollToTop />
        <AnimatedBackground />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
