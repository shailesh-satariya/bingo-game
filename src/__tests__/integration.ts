import {GameState, TileGrid, TileGridPosition} from "../types";
import {Store} from "redux";
import {GameActions} from "../redux/action-types";
import {addMove, newGame} from "../redux/actions";
import {RootState} from "../redux/store";
import {storeFactory} from "../test/utils";

const grid: TileGrid = [
    [{phrase: 'foo', traversed: false}, {phrase: 'bar', traversed: false}],
    [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
];

const position1: TileGridPosition = { x: 0, y: 0 };
const position2: TileGridPosition = { x: 0, y: 1 };
const position3: TileGridPosition = { x: 1, y: 0 };
const position4: TileGridPosition = { x: 1, y: 1 };

describe("actions dispatcher", () => {
    const store: Store<RootState, GameActions> = storeFactory();
    test("newGame: new game", () => {
        store.dispatch<any>(newGame(grid));
        const expectedState: RootState = {
            initialGrid: grid,
            moves: [],
            grid: grid,
            gameState: GameState.IN_PROGRESS,
            bingo: false
        };

        expect(store.getState()).toEqual(expectedState);
    });

    test("addMove: update 1st move correctly", () => {
        store.dispatch<any>(addMove(position1));

        const expectedState: RootState = {
            initialGrid: grid,
            moves: [position1],
            grid: [
                [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: false}],
                [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
            ],
            gameState: GameState.IN_PROGRESS,
            bingo: false
        };

        expect(store.getState()).toEqual(expectedState);
    });

    test("addMove: update 2nd move correctly", () => {
        store.dispatch<any>(addMove(position2));

        const expectedState: RootState = {
            initialGrid: grid,
            moves: [position1, position2],
            grid: [
                [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: true}],
                [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
            ],
            gameState: GameState.IN_PROGRESS,
            bingo: true
        };

        expect(store.getState()).toEqual(expectedState);
    });

    test("addMove: update 3rd moves and correctly game state correctly", () => {
        store.dispatch<any>(addMove(position3));

        const expectedState: RootState = {
            initialGrid: grid,
            moves: [position1, position2, position3],
            grid: [
                [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: true}],
                [{phrase: 'baz', traversed: true}, {phrase: 'far', traversed: false}],
            ],
            gameState: GameState.IN_PROGRESS,
            bingo: true
        };

        expect(store.getState()).toEqual(expectedState);
    });

    test("addMove: update 4th move", () => {
        store.dispatch<any>(addMove(position4));

        const expectedState: RootState = {
            initialGrid: grid,
            moves: [position1, position2, position3, position4],
            grid: [
                [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: true}],
                [{phrase: 'baz', traversed: true}, {phrase: 'far', traversed: true}],
            ],
            gameState: GameState.SOLVED,
            bingo: true
        };

        expect(store.getState()).toEqual(expectedState);
    });
});
