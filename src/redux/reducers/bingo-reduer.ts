import {GameActions, NEW_GAME, BINGO, NO_BINGO} from "../action-types";

const initialState: boolean = false;

/**
 * @function BingoReducer
 *
 * @param {boolean} state - State before reducer.
 * @param {GameActions} action - Action sent to reducer.
 *
 * @returns {boolean} - New state.
 */
const BingoReducer = (state: boolean = initialState, action: GameActions): boolean => {
    switch (action.type) {
        case NEW_GAME:
            return initialState;
        case BINGO:
            return true;
        case NO_BINGO:
            return false;
        default:
            return state;
    }
};

export default BingoReducer;