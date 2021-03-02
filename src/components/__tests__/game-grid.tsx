import {TileGrid, TileGridPosition} from "../../types";
import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../test/utils";

import GameGrid, {GameGridProps} from "../game-grid";

const grid: TileGrid = [
    [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: false}],
    [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
];

const defaultProps: GameGridProps = {
    grid,
    addMove: ( position: TileGridPosition ): void => {}
}

/**
 * Factory function to create a ShallowWrapper for the GameGrid component.
 * @function setup
 *
 * @param {GameGridProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: GameGridProps = defaultProps): ShallowWrapper => {
    return shallow(<GameGrid {...props} />);
}

describe("render", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    })

    test("renders component without an error", () => {
        const componentGameGrid = findByTestAttr(wrapper, "component-game-grid");

        expect(componentGameGrid.length).toBe(1);
    });

    test("renders grid tiles without an error", () => {
        const componentGridTiles = findByTestAttr(wrapper, "grid-tile");

        expect(componentGridTiles.length).toBe(4);
    });
});

describe("grid-tile class test", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    })

    test("first grid tile has class traversed", () => {
        const componentGridTiles = findByTestAttr(wrapper, "grid-tile");

        expect(componentGridTiles.first().hasClass("traversed")).toBeTruthy();
    });

    test("last grid tile does not have class traversed", () => {
        const componentGridTiles = findByTestAttr(wrapper, "grid-tile");

        expect(componentGridTiles.last().hasClass("traversed")).not.toBeTruthy();
    });
});

test("calls `addMove` prop when select value is changed", () => {
    const addMoveMock = jest.fn();
    const props: GameGridProps = {...defaultProps, addMove: addMoveMock}

    const wrapper = setup(props);

    // simulate click on select on change
    const value: TileGridPosition = { x: 1, y: 1 };
    const tileElm = findByTestAttr(wrapper, "grid-tile");
    tileElm.last().simulate("click");

    // expect the mock to have been called once
    expect(addMoveMock).toHaveBeenCalledWith(value);
});
