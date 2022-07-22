import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';
import Home from './components/Home';
import Ventes from './components/Ventes';
import Affaires from './components/Affaires';
import Acheter from './components/Acheter';
import Creer from './components/creation';
import Navigation from './navigation';
import head from './components/images/TitreFR.png'

function App() {
  return (
    <html lang='fr'>
       <Router>
      <div className="App">
        <div className='header'>
        <img src={head} alt="img" width={450}></img>
        <h4>19 Fevrier 1920</h4>
          </div>
          
          
      <Navigation/>
      <div className="content">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Ventes" element={<Ventes/>} />
            <Route path="/Affaires" element={<Affaires />} />
              <Route path="/Acheter" element={<Acheter />} />
              <Route path="/Creation" element={<Creer/>} />
            <Route path="/*" element={<Home/>} />
        </Routes>
        </div>
    </div>
      </Router>
      </html>
  );
}

export default App;
