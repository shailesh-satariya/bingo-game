import {TileGrid} from "../../../types";
import {NEW_GAME} from "../../action-types";
import InitialGridReducer from "../initial-grid-reducer";

const grid: TileGrid = [
    [{phrase: 'foo', traversed: false}, {phrase: 'bar', traversed: false}],
    [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
];

test("returns default initial state of `null` when no action is passed", () => {
    const newState = InitialGridReducer(undefined, {type: undefined});
    expect(newState).toBe(null);
});

test("returns state of new grid upon receiving an action of type `NEW_GAME`", () => {
    const newState = InitialGridReducer(null, {type: NEW_GAME, payload: {grid}});
    expect(newState).toEqual(grid);
})
