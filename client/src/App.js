import './App.css';
//!Importamos nuestros componentes
import WelcomeLandingPage from './components/WelcomeLandingPage/WelcomeLandingPage';
import Navbar from './components/Navbar/Navbar';
import CreateDog from './components/CreateDog/CreateDog';
import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter';
import Home from './components/Home/Home';
//! IMPORTAMOS ROUTES Y ROUTER
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
//! Importarmos data de prueba para hacer las cards
//import {dogs} from "./utils/data";

function App() {

  let location = useLocation();
  let navigate = useNavigate();
  const login = () => {
    navigate("/home");
  }

  return (
    <div className="App">
      {
        (location.pathname !== '/') ? <Navbar />: null
      }
      {
        (location.pathname !== '/' && location.pathname !== '/createDog') ? <SearchAndFilter /> : null
      }
     
      <Routes>
        <Route path='/' element={<WelcomeLandingPage login={login}/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/createDog' element={<CreateDog />} />
      </Routes>


    </div>
  );
}

export default App;
