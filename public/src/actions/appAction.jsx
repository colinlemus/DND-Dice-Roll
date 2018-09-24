import { FETCH_ROLLS, NEW_ROLL } from './types';

export const fetchRolls = () => dispatch => {
    fetch('/api/rolls')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_ROLLS,
            payload: data
        }));
}

export const createRoll = (roll) => dispatch => {
    fetch('/api/rolls', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },

        body: JSON.stringify(roll)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_ROLL,
            payload: data
        }));
}