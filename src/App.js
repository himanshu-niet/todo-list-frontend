import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import SciencePage from './pages/sciencePage';
import HealthPage from './pages/healthPage';
import SportPage from './pages/sportPage';
import TechPage from './pages/techPage';
import IndiaPage from './pages/indiaPage';
import NoPageFound from './pages/noPageFound'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
        <Route path="science" element={<SciencePage />} />
        <Route path="health" element={<HealthPage />} />
        <Route path="technology" element={<TechPage />} />
        <Route path="sports" element={<SportPage />} />
        <Route path="india" element={<IndiaPage />} />
        <Route path="*" element={<NoPageFound />} />
    
    </Routes>
    </>
  );
}

export default App;
