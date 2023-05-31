import { GET_DOGS, GET_TEMPERAMENTS,  SET_CURRENT_PAGE, CREATE_DOG, FILTER_TEMPERAMENTS, DISPLAY_STATE, GET_DOGS_API, GET_DOGS_CREATE } from "./actions-type";

//! creamos nuestro globalStore
const initialState = {
    dogs: [],
    dogsApi: [],
    dogsCreate: [],
    temperaments: [],
    filterTemperaments: [],
    isCreateDog: [],
    paginate: {
        currentPage: 1,
        itemsPage: 8,
    },
    displayState: {
        all: true,
        api: false,
        create: false,
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
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                paginate: {
                    currentPage: payload,
                    itemsPage: 8
                }
            }
        case FILTER_TEMPERAMENTS: 
            return {
                ...state,
                filterTemperaments: state.dogs.filter( dog => dog.temperaments.includes(payload))
            }
        case DISPLAY_STATE:
            return {
                ...state,
                displayState: payload
            }
        case GET_DOGS_API:
            return {
                ...state,
                dogsApi: state.dogs.filter( dog => typeof dog.id === "number")
            }
        case GET_DOGS_CREATE:
            return {
                ...state,
                dogsCreate: state.dogs.filter( dog => typeof dog.id === "string")
            }
        default:
        return {...state}
    }
}

export default reducer;