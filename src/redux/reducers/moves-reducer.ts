import {TileGridPosition} from "../../types";
import {ADD_MOVE, GameActions, NEW_GAME} from "../action-types";

const initialState: TileGridPosition[] = [];

/**
 * @function MovesReducer
 *
 * @param {TileGridPosition[]} state - State before reducer.
 * @param {GameActions} action - Action sent to reducer.
 *
 * @returns {TileGridPosition[]} - New state.
 */
const MovesReducer = (state: TileGridPosition[] = initialState, action: GameActions) => {
    switch (action.type) {
        case NEW_GAME:
            return initialState;
        case ADD_MOVE:
            return [...state, action.payload.position];
        default:
            return state;
    }
}

export default MovesReducer;
