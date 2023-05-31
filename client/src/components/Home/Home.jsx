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
    //!  me traigo los filtros para ver su estado
    const filterTemperaments = useSelector( state => state.filterTemperaments );

    if(display.all) {
        if(filterTemperaments.state) {
            result = filterTemperaments.data;
        } else {
            result = dogsALL;
        }
    } 
    if(display.api) {
        if(filterTemperaments.state) {
            result = filterTemperaments.data;
        } else {
            result = dogsApi;
        }
    } 
    if(display.create) {
        if(filterTemperaments.state) {
            result = filterTemperaments.data;
        } else {
            result = dogsCreate;
        }
    }


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