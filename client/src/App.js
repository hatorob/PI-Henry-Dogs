import './App.css';
//!Importamos nuestros componentes
import WelcomeLandingPage from './components/WelcomeLandingPage/WelcomeLandingPage';
import Navbar from './components/Navbar/Navbar';
//! IMPORTAMOS ROUTES Y ROUTER
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/home/Home';

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
      <Routes>
        <Route path='/' element={<WelcomeLandingPage login={login}/>} />
        <Route path='/home' element={<Home />} />
      </Routes>


    </div>
  );
}

export default App;
