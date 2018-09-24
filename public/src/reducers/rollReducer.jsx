import { FETCH_ROLLS, NEW_ROLL } from "../actions/types";

const initalState = {
    rolls: [],
    roll: {

    }
};

export default (state = initalState, action) => {
    if (action.type === FETCH_ROLLS) {
        return {
            ...state,
            rolls: action.payload
        }
    } else if(action.type === NEW_ROLL) {
        return {
            ...state,
            roll: action.payload
        }
    } else {
        return state;
    }
}