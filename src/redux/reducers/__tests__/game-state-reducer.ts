import {GameState} from "../../../types";
import {NEW_GAME, SOLVED} from "../../action-types";
import GameStateReducer from "../game-state-reducer";

test("returns default initial state of `GameState.NOT_STARTED` when no action is passed", () => {
    const newState = GameStateReducer(undefined, {type: undefined});
    expect(newState).toBe(GameState.NOT_STARTED);
});

test("returns state of `GameState.IN_PROGRESS` upon receiving an action of type `NEW_GAME`", () => {
    const newState = GameStateReducer(GameState.NOT_STARTED, {type: NEW_GAME, payload: {grid: []}});
    expect(newState).toBe(GameState.IN_PROGRESS);
});

test("returns state of `GameState.SOLVED` upon receiving an action of type `SOLVED`", () => {
    const newState = GameStateReducer(GameState.IN_PROGRESS, {type: SOLVED});
    expect(newState).toBe(GameState.SOLVED);
});