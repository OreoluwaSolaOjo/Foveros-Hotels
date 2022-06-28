import {
    ROOM_LOADED_SUCCESS, ROOM_LOADED_FAIL, SINGLE_ROOM_LOADED_FAIL, SINGLE_ROOM_LOADED_SUCCESS
} from './actionTypes';
// initial/ default state where user is not logged in
const initialState = {
    rooms: [
    ],
    category_name: "all",
    capacity: "1",
    room: []
};

export default function (state = initialState, action) {
    // destructer type and payload in action
    const { type, payload } = action;

    switch (type) {
        case ROOM_LOADED_SUCCESS:
            return {
                ...state,
                rooms: payload,

            }
        case ROOM_LOADED_FAIL:
            return {
                ...state,

            }
        case SINGLE_ROOM_LOADED_SUCCESS:
            return {
                ...state,
                room: payload,

            }
        case SINGLE_ROOM_LOADED_FAIL:
            return {
                ...state,

            }
        default:
            return state
    }
}