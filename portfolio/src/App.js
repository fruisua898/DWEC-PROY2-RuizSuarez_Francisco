
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Navegacion from './components/navegacion';
import Academics from './components/Academics';
import Portfolio from './components/Portfolio';
import Random from './components/Random';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
      <Router>
        <div className="App">
        <Navegacion/>
        <Routes>
          <Route path='/' element={<Profile/>}/>
          <Route path="/academics" element={<Academics/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/random" element={<Random/>}/>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
