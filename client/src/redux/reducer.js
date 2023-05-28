import { GET_DOGS, SET_CURRENT_PAGE } from "./actions-type";

//! creamos nuestro globalStore
const initialState = {
    dogs: [],
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