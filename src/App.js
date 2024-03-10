
import './App.css';
import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Blogs from './components/pages/Blogs';
import Time from './components/Time';
import Menu from './components/Menu';
import AdviceTicket from './components/projects/AdviceTicket';
import EncryptDerypt from './components/projects/EnryptDecrypt';
import WeatherWebsite from './components/projects/WeatherWebsite';
import { V1, V2, V3 } from './components/Versions'

function App() {

  return (
    <div className='container'>
      <Time />
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
