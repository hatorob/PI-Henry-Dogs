import './App.css';
//!Importamos nuestros componentes
import WelcomeLandingPage from './components/WelcomeLandingPage/WelcomeLandingPage';
import Navbar from './components/Navbar/Navbar';
import CreateDog from './components/CreateDog/CreateDog';
import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter';
import Home from './components/Home/Home';
//! IMPORTAMOS ROUTES Y ROUTER
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { getDogs, getTemperaments, setCurrentPage } from './redux/actions';
import Detail from './components/Detail/Detial';
//! Importarmos data de prueba para hacer las cards
//import {dogs} from "./utils/data";

function App() {

  let location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();


  const login = () => {
    navigate("/home");
  }
  //! Usamos el useEffect para que cada vez que se recargue la pagina, me traiga todos los perros de la api con getDogs
  useEffect( () => {
    //! Me va a traer todos los perros siempre y cuando sea la url "/home"
    if(location.pathname === "/home" || location.pathname === "/createDog") {
      dispatch(getTemperaments());
      dispatch(setCurrentPage(1));
    }
    if(location.pathname === "/home") {
        dispatch(getDogs()); 
        dispatch(setCurrentPage(1));       
    }
}, [dispatch,location.pathname] )

  return (
    <div className="App">
      {
        (location.pathname !== '/') ? <Navbar />: null
      }
      {
        (location.pathname !== '/' && location.pathname !== '/createDog' && !location.pathname.startsWith('/detail/')) ? <SearchAndFilter /> : null
      }
      <Routes>
        <Route path='/' element={<WelcomeLandingPage login={login}/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/createDog' element={<CreateDog />} />
      </Routes>
    </div>
  );
}

export default App;
