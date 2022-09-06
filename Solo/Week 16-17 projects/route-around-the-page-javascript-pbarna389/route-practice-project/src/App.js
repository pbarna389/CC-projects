import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Header'
import Footer from './components/Footer'

import About from './pages/about'
import Home from './pages/home'
import Contracts from './pages/contracts'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="About" exact element={<About />} />
          <Route path="Contracts" exact element={<Contracts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
