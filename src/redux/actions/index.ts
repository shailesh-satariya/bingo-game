import {
    TileGrid, TileGridPosition
} from "../../types";
import {
    cloneGrid,
    is1stDiagonalTraversed, is2ndDiagonalTraversed,
    isColumnTraversed,
    isRowTraversed,
    isTraversed
} from "../../utils";
import {Dispatch} from "redux";

import {
    ADD_MOVE, BINGO,
    NEW_GAME, NO_BINGO,
    SOLVED
} from "../action-types";
import {RootState} from "../store";

/**
 * Returns Redux Thunk function that dispatches NEW_GAME action
 *     and (conditionally) SOLVED action
 * @function newGame
 *
 * @param {TileGrid} grid - new grid.
 *
 * @returns {function} - Redux Thunk function.
 */
export const newGame = (grid: TileGrid) => (dispatch: Dispatch) => {
    dispatch({
        type: NEW_GAME,
        payload: {grid}
    });

    if (isTraversed(grid)) {
        dispatch({
            type: SOLVED,
            payload: grid
        });
    }
};

/**
 * Returns Redux Thunk function that dispatches ADD_MOVE action
 *     and (conditionally) SOLVED action
 * @function addMove
 *
 * @param {TileGridPosition} position - tile grid position.
 * @returns {function} - Redux Thunk function.
 */
export const addMove = (position: TileGridPosition) => (dispatch: Dispatch, getState: () => RootState) => {
    const {grid: currentGrid}: RootState = getState();
    const { x, y }: TileGridPosition = position;
    if( currentGrid && currentGrid[x] && currentGrid[x][y]  ) {
        currentGrid[x][y].traversed = true;
    }

    const grid: TileGrid | null = currentGrid ? cloneGrid( currentGrid ) : currentGrid;

    dispatch({
        type: ADD_MOVE,
        payload: {
            grid, position
        }
    });

    if (grid) {
        if( isRowTraversed(grid, position) || isColumnTraversed(grid, position) ||
            is1stDiagonalTraversed(grid, position) || is2ndDiagonalTraversed(grid, position) ) {
            dispatch({
                type: BINGO
            });
        }

        if( isTraversed(grid) ) {
            dispatch({
                type: SOLVED,
                payload: grid
            });
        }
    }
};


/**
 * Returns Redux Thunk function that dispatches NO_BINGO action
 * @function setNoBingo
 *
 * @returns {function} - Redux Thunk function.
 */
export const setNoBingo = () => (dispatch: Dispatch) => {
    dispatch({type: NO_BINGO})
};