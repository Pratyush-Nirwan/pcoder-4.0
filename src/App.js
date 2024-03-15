import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Menu from './components/others/Menu';
import AdviceTicket from './components/projects/AdviceTicket';
import EncryptDerypt from './components/projects/EnryptDecrypt';
import WeatherWebsite from './components/projects/WeatherWebsite';
import { V1, V2, V3 } from './components/others/Versions';

function App() {

  return (
    <div className='container'>
      <div id='page-body'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/projects/advice-ticket' element={<AdviceTicket />} />
          <Route path='/projects/encryptdecrypt' element={<EncryptDerypt />} />
          <Route path='/projects/weather-website' element={<WeatherWebsite />} />
          <Route path='/projects/archive/v1.0' element={<V1 />} />
          <Route path='/projects/archive/v2.0' element={<V2 />} />
          <Route path='/projects/archive/v3.0' element={<V3 />} />

        </Routes>
      </div>
      <Menu />
    </div>
  );
}

export default App;
