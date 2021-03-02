import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {Store} from "redux";
import {GameState, TileGrid, TileGridPosition} from "../types";

import App, {AppProps, DisconnectedApp} from "../App";
import {GameActions} from "../redux/action-types";
import {RootState} from "../redux/store";
import {DefaultState, findByTestAttr, storeFactory} from "../test/utils";

const grid: TileGrid = [
    [{phrase: 'foo', traversed: false}, {phrase: 'bar', traversed: false}],
    [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
];

const defaultState: RootState = {...DefaultState, grid};

const defaultProps: AppProps = {
    gameState: GameState.NOT_STARTED,
    bingo: false,
    grid,
    newGame: ( grid: TileGrid ) => {},
    addMove: ( position: TileGridPosition ) => {},
    setNoBingo: () => {}
};

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 *
 * @param {RootState} initialState - Initial state for this setup.
 *
 * @returns {ShallowWrapper}
 */
const setup = (initialState: RootState = defaultState): ShallowWrapper => {
    const store: Store<RootState, GameActions> = storeFactory(initialState);
    const props = {store};
    return shallow(<App {...props} />).dive().dive();
}

/**
 * Factory function to create a ShallowWrapper for the DisconnectedApp component.
 * @function setup
 * @param {AppProps} props
 *
 * @returns {ShallowWrapper}
 */
const setupDisconnected = (props: AppProps = defaultProps): ShallowWrapper => {
    return shallow(<DisconnectedApp {...props} />);
}

describe("render", () => {
    let wrapper: ShallowWrapper;

    describe("renders elements when `gameState` is NOT_STARTED", () => {
        beforeEach(() => {
            wrapper = setup();
        });

        test("renders component without an error", () => {
            const componentApp = findByTestAttr(wrapper, "component-app");

            expect(componentApp.length).toBe(1);
        });

        test("does not render game grid element", () => {
            const elmGameGrid = findByTestAttr(wrapper, "elm-game-grid");

            expect(elmGameGrid.length).toBe(0);
        });
    });

    describe("renders elements when `gameState` is IN_PROGRESS", () => {
        beforeEach(() => {
            wrapper = setup({...defaultState, gameState: GameState.IN_PROGRESS});
        });

        test("renders component without an error", () => {
            const componentApp = findByTestAttr(wrapper, "component-app");

            expect(componentApp.length).toBe(1);
        });

        test("renders game grid element without an error", () => {
            const elmGameGrid = findByTestAttr(wrapper, "elm-game-grid");

            expect(elmGameGrid.length).toBe(1);
        });
    });
});

describe("renders confetti ribbons element", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = setupDisconnected();
    });

    test("does not render toast message", () => {
        const elmConfettiRibbons = findByTestAttr(wrapper, "elm-confetti-ribbons");

        expect(elmConfettiRibbons.length).toBe(0);
    });

    test("renders toast message", () => {
        wrapper.setProps({bingo: true});
        const elmConfettiRibbons = findByTestAttr(wrapper, "elm-confetti-ribbons");

        expect(elmConfettiRibbons.length).toBe(1);
    });
});

test("addMove function", () => {
    const addMoveMock: jest.Mock = jest.fn();
    const wrapper = setupDisconnected({...defaultProps, gameState: GameState.IN_PROGRESS, addMove: addMoveMock});
    const elmGameGrid = findByTestAttr(wrapper, "elm-game-grid");
    (elmGameGrid.prop("addMove") as Function)();
    expect(addMoveMock).toHaveBeenCalled();
});
