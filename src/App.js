import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Explore" element={<Explore />}/>
        <Route path="/Subscription" element={<Subscription />}/>
      </Routes>
    </Router>

  );
}

export default App;
