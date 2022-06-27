import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';
import Home from './components/Home';
import Ventes from './components/Ventes';
import Affaires from './components/Affaires';
import Acheter from './components/Acheter'
import Navigation from './navigation';

function App() {
  return (
    
       <Router>
      <div className="App">
        <h1>The Tantara</h1>
        <h3>19 Fevrier 1920</h3>
      <Navigation/>
      <div className="content">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Ventes" element={<Ventes/>} />
            <Route path="/Affaires" element={<Affaires />} />
            <Route path="/Acheter" element={<Acheter/>} />
            <Route path="/*" element={<Home/>} />
        </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
