import './App.css';
//!Importamos nuestros componentes
import WelcomeLandingPage from './components/WelcomeLandingPage/WelcomeLandingPage';
import Navbar from './components/Navbar/Navbar';
import CreateDog from './components/CreateDog/CreateDog';
import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter';
import Cards from './components/Cards/Cards';
//! IMPORTAMOS ROUTES Y ROUTER
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
//! Importar data
import {dogs} from "./utils/data";

function App() {

  let location = useLocation();
  let navigate = useNavigate();

  const login = () => {
    navigate("/home");
  }


  return (
    <div className="App">
      {
        (location.pathname !== '/') ? <Navbar /> : null
      }
      {
        (location.pathname !== '/' && location.pathname !== '/createDog') ? <SearchAndFilter /> : null
      }
     
      <Routes>
        <Route path='/' element={<WelcomeLandingPage login={login}/>} />
        <Route path='/home' element={<Cards dogs={dogs} />} />
        <Route path='/createDog' element={<CreateDog />} />
      </Routes>


    </div>
  );
}

export default App;
