import { FETCH_ROLLS, NEW_ROLL } from "../actions/types";

const initalState = {
    items: [],
    item: {

    }
};

export default (state = initalState, action) => {
    if (action.type === FETCH_ROLLS) {
        return {
            ...state,
            items: action.payload
        }
    } else if(action.type === NEW_ROLL) {
        return {
            ...state,
            item: action.payload
        }
    } else {
        return state;
    }
}