import {TileGrid} from "../../../types";
import {ADD_MOVE, NEW_GAME} from "../../action-types";
import GridReducer from "../grid-reducer";

const grid: TileGrid = [
    [{phrase: 'foo', traversed: false}, {phrase: 'bar', traversed: false}],
    [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
];

test("returns default initial state of `null` when no action is passed", () => {
    const newState = GridReducer(undefined, {type: undefined});
    expect(newState).toBe(null);
});

test("returns state of new grid upon receiving an action of type `NEW_GAME`", () => {
    const newState = GridReducer(null, {type: NEW_GAME, payload: {grid}});
    expect(newState).toEqual(grid);
});

test("returns state of changed grid upon receiving an action of type `ADD_MOVE`", () => {
    const newGrid: TileGrid = [
        [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: false}],
        [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
    ];

    const newState = GridReducer(grid, {type: ADD_MOVE, payload: {position: {x: 0, y: 0}, grid: newGrid}});
    expect(newState).toBe(newGrid);
});
