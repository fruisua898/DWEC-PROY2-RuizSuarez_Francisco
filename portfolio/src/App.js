
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Navegacion from './components/navegacion';
import Academics from './components/Academics';
import Portfolio from './components/Portfolio';




function App() {
  return (

    <div className="App">
      <Navegacion/>
      <Profile/>
      <Academics/>
      <Portfolio/>
    </div>
  );
}

export default App;
