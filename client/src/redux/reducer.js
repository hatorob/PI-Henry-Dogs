import { GET_DOGS, GET_TEMPERAMENTS,  SET_CURRENT_PAGE, CREATE_DOG, FILTER_TEMPERAMENTS, DISPLAY_STATE, GET_DOGS_API, GET_DOGS_CREATE, RESET_FILTERS } from "./actions-type";

//! creamos nuestro globalStore
const initialState = {
    dogs: [],
    dogsApi: [],
    dogsCreate: [],
    temperaments: [],
    filterTemperaments: {
        state: false,
        data: []
    },
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
            let result;
            if(state.displayState.all) result = state.dogs.filter( dog => dog.temperaments.includes(payload));
            if(state.displayState.api) result = state.dogsApi.filter( dog => dog.temperaments.includes(payload));
            if(state.displayState.create) result = state.dogsCreate.filter( dog => dog.temperaments.includes(payload));
            return {
                ...state,
                filterTemperaments: {
                    state: true,
                    data: result
                }
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
        case RESET_FILTERS:
            return {
                ...state,
                filterTemperaments: {
                    state: false,
                    data: []
                },
            }
        default:
        return {...state}
    }
}

export default reducer;