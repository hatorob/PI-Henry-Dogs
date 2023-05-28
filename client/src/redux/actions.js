import { GET_DOGS, GET_PAGE, SET_CURRENT_PAGE } from "./actions-type";

export const getDogs = (dogs) => {
    return { type: GET_DOGS, payload: dogs }
}

export const getPage = (number) => {
    return { type: GET_PAGE, payload: number }
}

export const setCurrentPage = (number) => {
    return { type: SET_CURRENT_PAGE, payload: number }
}