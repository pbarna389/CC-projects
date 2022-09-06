import './App.css';
import SolarSys from './components/SolarSys'
import Navbar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Gallery from './pages/Gallery';
import AnotherCurrent from './components/AnotherCurrent'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<SolarSys />} />
          <Route path='/Current' exact element={<AnotherCurrent />} />
          <Route path='/Gallery' exact element={<Gallery />} />
          {/* <Route path='/Presentation' exact element={<Presentation/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
