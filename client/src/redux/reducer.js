import { GET_DOGS, GET_TEMPERAMENTS, GET_BY_NAME, SET_CURRENT_PAGE, CREATE_DOG, FILTER_TEMPERAMENTS, DISPLAY_STATE, GET_DOGS_API, GET_DOGS_CREATE, RESET_FILTERS, FILTER_WEIGHT, FILTER_ALPHABETIC, GET_DOG_BY_ID, REST_BY_ID } from "./actions-type";

//! creamos nuestro globalStore
const initialState = {
    dogs: [],
    dogsApi: [],
    dogsCreate: [],
    dogById: [],
    temperaments: [],
    dogsByName: {
        state: false,
        data: []
    },
    filterTemperaments: {
        state: false,
        data: []
    },
    filterWeight: {
        state: false,
        data: []
    },
    filterAlphabetic: {
        state: false,
        data: []
    },
    //isCreateDog: [],
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
        case GET_BY_NAME:
            return {
                ...state,
                dogsByName: {
                    state: true,
                    data: payload
                }
            }
        case GET_DOG_BY_ID:
            return {
                ...state,
                dogById: payload
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
            let resultTemperaments;
            if(state.displayState.all) resultTemperaments = state.dogs.filter( dog => dog.temperaments.includes(payload));
            if(state.displayState.api) resultTemperaments = state.dogsApi.filter( dog => dog.temperaments.includes(payload));
            if(state.displayState.create) resultTemperaments = state.dogsCreate.filter( dog => dog.temperaments.includes(payload));
            return {
                ...state,
                dogsByName: {
                    state: false,
                    data: []
                },
                filterTemperaments: {
                    state: true,
                    data: resultTemperaments
                },
                filterWeight: {
                    state: false,
                    data: []
                },
                filterAlphabetic: {
                    state: false,
                    data: []
                },
            }
        case FILTER_WEIGHT: 
            let resultWeight;
            // funcion que me ordena la data y le paso si es minimo o máximo
            let order = (data,typeOrder) => {
                return data.sort( (a,b) => {
                    if(typeOrder === "minimun") {
                        return Number(a.weight.split("-")[1]) - Number(b.weight.split(" - ")[1]) 
                    } else {
                        return Number(b.weight.split("-")[1]) - Number(a.weight.split(" - ")[1])
                    }
                })
            }

            if(state.displayState.all) {
                //console.log("tipo:", payload);
                resultWeight = order(state.dogs,payload);
            } 
            if(state.displayState.api) {
                resultWeight = order(state.dogsApi,payload);
            } 
            if(state.displayState.create) {
                resultWeight = order(state.dogsCreate,payload);
            } 
            return {
                ...state,
                dogsByName: {
                    state: false,
                    data: []
                },
                filterTemperaments: {
                    state: false,
                    data: []
                },
                filterWeight: {
                    state: true,
                    data: resultWeight
                },
                filterAlphabetic: {
                    state: false,
                    data: []
                },
            }
        case FILTER_ALPHABETIC:
            let resultAlphabetic;
            let orderToAlphabetic = (data,typeOrder) => {
                return data.sort( (a,b) => {
                    if(typeOrder === "descendent") {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    } else {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    }
                    return 0;
                })
            }
            if(state.displayState.all) {
                //console.log("tipo:", payload);
                resultAlphabetic = orderToAlphabetic(state.dogs,payload);
            } 
            if(state.displayState.api) {
                resultAlphabetic = orderToAlphabetic(state.dogsApi,payload);
            } 
            if(state.displayState.create) {
                resultAlphabetic = orderToAlphabetic(state.dogsCreate,payload);
            } 
            return {
                ...state,
                dogsByName: {
                    state: false,
                    data: []
                },
                filterTemperaments: {
                    state: false,
                    data: []
                },
                filterWeight: {
                    state: false,
                    data: []
                },
                filterAlphabetic: {
                    state: true,
                    data: resultAlphabetic
                },
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
                dogsByName: {
                    state: false,
                    data: []
                },
                filterTemperaments: {
                    state: false,
                    data: []
                },
                filterWeight: {
                    state: false,
                    data: []
                },
                filterAlphabetic: {
                    state: false,
                    data: []
                },
            }
        case REST_BY_ID: 
            return {
                ...state,
                dogById: []
            }
        default:
        return {...state}
    }
}

export default reducer;