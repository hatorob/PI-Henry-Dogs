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
    const filterWeight = useSelector( state => state.filterWeight );
    const filterAlphabetic = useSelector( state => state.filterAlphabetic );
    
    //console.log("filterTemperaments:",filterTemperaments);
    //console.log("filterWeight:",filterWeight);
    console.log("filterAlphabetic:",filterAlphabetic);

    if(display.all) {
        if(filterTemperaments.state) {
            if(filterTemperaments.data.length === 0) alert("I don't find by temperaments")
            result = filterTemperaments.data;
        } else if (filterWeight.state) {
            result = filterWeight.data;
        } else if (filterAlphabetic.state) {
            result = filterAlphabetic.data;
        } else {
            result = dogsALL;
        }
    } 
    if(display.api) {
        if(filterTemperaments.state) {
            if(filterTemperaments.data.length === 0) alert("I don't find by temperaments")
            result = filterTemperaments.data;
        } else if (filterWeight.state) { 
            result = filterWeight.data;
        } else if (filterAlphabetic.state) {
            result = filterAlphabetic.data;
        } else {
            result = dogsApi;
        }
    } 
    if(display.create) {
        if(filterTemperaments.state) {
            if(filterTemperaments.data.length === 0) alert("I don't find by temperaments")
            result = filterTemperaments.data;
        } else if (filterWeight.state) { 
            result = filterWeight.data;
        } else if (filterAlphabetic.state) {
            result = filterAlphabetic.data;
        } else {
            result = dogsCreate;
        }
    }


    return (
        <>
            {
                <Cards dogs={result} /> 
            }
        </>
    )
}

export default Home;