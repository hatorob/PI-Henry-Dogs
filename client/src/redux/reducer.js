import { GET_DOGS, GET_TEMPERAMENTS,  SET_CURRENT_PAGE, CREATE_DOG } from "./actions-type";

//! creamos nuestro globalStore
const initialState = {
    dogs: [],
    temperaments: [],
    isCreateDog: [],
    paginate: {
        currentPage: 1,
        itemsPage: 8,
    }
}
//! Actualizaremos con nuestro reducer nuestras variables de nuesto initialState
const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_DOGS:
            return {
                ...state, 
                dogs: payload
            } 
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: payload
            }
        case CREATE_DOG:
            return {
                ...state,
                temperaments: payload
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                paginate: {
                    currentPage: payload,
                    itemsPage: 8
                }
            }
        }
        default:
        return {...state}
    }
}

export default reducer;