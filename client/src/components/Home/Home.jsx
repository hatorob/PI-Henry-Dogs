//import {useLocation } from 'react-router-dom';
//! importamos useSelector para obtener la data de nuestro store.
import {  useSelector } from 'react-redux';
//! importamos las cards
import Cards from "../Cards/Cards";


const Home = () => {
    //! me traigo mis estados para renderizar lo que necesito:
    const display = useSelector( state => state.displayState );
    //! creo una variable dogs vacia donde almaceno la data según lo que necesite.
    let result;
    let dogsALL = useSelector( state => state.dogs );
    let dogsApi = useSelector( state => state.dogsApi );
    let dogsCreate = useSelector( state => state.dogsCreate );

    if(display.all) result = dogsALL;
    if(display.api) result = dogsApi;
    if(display.create) result = dogsCreate;

    const filterTemperaments = useSelector( state => state.filterTemperaments );

    console.log("filterTemperaments:", filterTemperaments);
    return (
        <>
            {
                <Cards dogs={result} /> 
            }
        </>
    )
}

export default Home;