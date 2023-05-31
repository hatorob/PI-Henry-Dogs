//import {useLocation } from 'react-router-dom';
//! importamos useSelector para obtener la data de nuestro store.
import {  useSelector } from 'react-redux';
//! importamos las cards
import Cards from "../Cards/Cards";


const Home = () => {

    const dogs = useSelector( state => state.dogs );
    const filterTemperaments = useSelector( state => state.filterTemperaments );

    console.log("filterTemperaments:", filterTemperaments);
    return (
        <>
            {
                <Cards dogs={dogs} /> 
            }
        </>
    )
}

export default Home;