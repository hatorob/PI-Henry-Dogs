import './App.css';
//! IMPORTAMOS ROUTES Y ROUTER
import { Routes, Route } from 'react-router-dom';
import WelcomeLandingPage from './components/WelcomeLandingPage/WelcomeLandingPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<WelcomeLandingPage/>} />
      </Routes>


    </div>
  );
}

export default App;
