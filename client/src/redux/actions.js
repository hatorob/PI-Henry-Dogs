import axios from 'axios';
import { GET_DOGS, GET_TEMPERAMENTS, GET_BY_NAME, SET_CURRENT_PAGE, CREATE_DOG, FILTER_TEMPERAMENTS, DISPLAY_STATE, GET_DOGS_API, GET_DOGS_CREATE, RESET_FILTERS, FILTER_WEIGHT, FILTER_ALPHABETIC } from "./actions-type";

export const getDogs = () => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get('http://localhost:3001/dogs');
        dispatch({ type: GET_DOGS, payload: data });
      } catch (error) {
        alert("error: " + error.response.data.error);
      }
    };
};

export const getTemperaments = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/temperaments");
            dispatch({type: GET_TEMPERAMENTS, payload: data })
        } catch (error) {
            alert("error: " + error.response.data.error);
        }
    }
}

export const getDogsByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/dogs/name?name=${name}`);
            dispatch({type: GET_BY_NAME, payload: data })
        } catch (error) {
            alert("error: " + error.response.data.error);
        }
    }
}

export const createDog = (dog) => {
    return async (dispatch) => {
        try {
            const url = "http://localhost:3001/dogs";
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const {data} = await axios.post(url,dog,config);
            dispatch({type: CREATE_DOG, payload: data})
        } catch (error) {
            //console.log(error);
            alert("error: " + error.response.data.error);
        }
    }
}

//Actualizar el paginado
export const setCurrentPage = (number) => {
    return { type: SET_CURRENT_PAGE, payload: number }
}

//Filtar por temperaments.

export const filterTemperaments = (temperament) => {
    return { type: FILTER_TEMPERAMENTS, payload: temperament}
}

// filtrar por weight
export const filterWeight = (typeWeight) => {
    return { type: FILTER_WEIGHT, payload: typeWeight}
}

// filtrar por alphabetic
export const filterAlphabetic = (typeAlphabetic) => {
    return { type: FILTER_ALPHABETIC, payload: typeAlphabetic}
}

export const displayState = (state) => {
    return { type: DISPLAY_STATE, payload: state }
}

// Obtener perros api y creados por el usuario
export const getDogsApi = () => {
    return { type: GET_DOGS_API }
}

export const getDogsCreate = () => {
    return { type: GET_DOGS_CREATE }
}

//!resetFilterAll
export const resetFilterAll = () => {
    return { type: RESET_FILTERS }
}