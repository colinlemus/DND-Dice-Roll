import { FETCH_ROLLS, NEW_ROLL } from "../actions/types";

const initalState = {
    items: [],
    item: {

    }
};

export default (state = initalState, action) => {
    switch (action.type) {
        case FETCH_ROLLS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_ROLL:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}