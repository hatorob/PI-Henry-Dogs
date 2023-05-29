//import {useLocation } from 'react-router-dom';
//! importamos useSelector para obtener la data de nuestro store.
import {  useSelector } from 'react-redux';
//! importamos las cards
import Cards from "../Cards/Cards";


const Home = () => {

    const dogs = useSelector( state => state.dogs );

    return (
        <>
            {
                <Cards dogs={dogs} /> 
            }
        </>
    )
}

export default Home;