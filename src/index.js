import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient';
import Loading from './components/others/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
const bg = ReactDOM.createRoot(document.getElementById('bg'));

bg.render(
  <MeshGradientRenderer
    className="gradient"
    colors={[
      "#213679",
      "#cc86aa",
      "#4d58a8",
      "#a87cb1",
      "#153899",
    ]}
  />
)

const loadingScreen = ReactDOM.createRoot(document.getElementById('loading-screen'));

loadingScreen.render(
  <Loading />
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
