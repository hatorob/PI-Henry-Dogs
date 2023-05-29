import axios from 'axios';
import { GET_DOGS, GET_TEMPERAMENTS, SET_CURRENT_PAGE, CREATE_DOG } from "./actions-type";

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
            console.log(data);
            dispatch({type: GET_TEMPERAMENTS, payload: data })
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
            console.log(error);
            alert("error: " + error.response.data.error);
        }
    }
}
export const setCurrentPage = (number) => {
    return { type: SET_CURRENT_PAGE, payload: number }
}
