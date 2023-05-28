import axios from 'axios';
import {useLocation } from 'react-router-dom';
//! importamos useSelector y dispatch de react-reduz, al cual nos permitira guardar y usar la data del redux
import { useDispatch, useSelector } from 'react-redux';
//! Importamos useEffect para traernos de nuestro back todos los perros
import { useEffect } from 'react';
//! Importamos la actions de obtener perros
import { getDogs } from '../../redux/actions';
//! importamos las cards
import Cards from "../Cards/Cards";


const Home = () => {
    let location = useLocation();
    //Usamos dispatch y useSelector
    const dispatch = useDispatch();
    const dogs = useSelector( state => state.dogs );

     //! Usamos el useEffect para que cada vez que se recargue la pagina, me traiga todos los perros de la api con getAllDogs
    useEffect( () => {
        //! función para obtener perros
        const getAllDogs = async () => {
        try {
            const { data } = await axios("http://localhost:3001/dogs");
            //? AQUÍ DESPACHAMOS A NUESTRO INITIALSTORE la data encontrada de todos los perros
            dispatch(getDogs(data));
        } catch (error) {
            alert("error: " + error.message);
        }
        }
        if(location.pathname === "/home") {
        getAllDogs()
        }
    }, [dispatch,location.pathname] )

    return (
        <>
            {
                <Cards dogs={dogs} /> 
            }
        </>
    )
}

export default Home;