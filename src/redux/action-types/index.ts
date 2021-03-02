import {TileGrid, TileGridPosition} from "../../types";

export const NEW_GAME = "NEW_GAME";
export const ADD_MOVE = "ADD_MOVE";
export const SOLVED = "SOLVED";
export const BINGO = "BINGO";
export const NO_BINGO = "NO_BINGO";

interface DefaultAction {
    type: undefined | null;
}

interface StartGameAction {
    type: typeof NEW_GAME;
    payload: {
        grid: TileGrid;
    };
}

interface AddMoveAction {
    type: typeof ADD_MOVE;
    payload: {
        position: TileGridPosition;
        grid: TileGrid;
    };
}

interface SolvedAction {
    type: typeof SOLVED;
}

interface BingoAction {
    type: typeof BINGO;
}

interface NoBingoAction {
    type: typeof NO_BINGO;
}

export type GameActions =
    DefaultAction
    | StartGameAction
    | AddMoveAction
    | SolvedAction
    | BingoAction
    | NoBingoAction;
