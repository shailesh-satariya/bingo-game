import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../test/utils";
import ConfettiRibbons from "../confetti-ribbons";

/**
 * Factory function to create a ShallowWrapper for the ToastMessage component.
 * @function setup
 *
 * @return {ShallowWrapper}
 */
const setup = (): ShallowWrapper => {
    return shallow(<ConfettiRibbons />);
}

describe("render", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test("renders component", () => {
        const componentConfettiRibbons = findByTestAttr(wrapper, "component-confetti-ribbons");

        expect(componentConfettiRibbons.length).toBe(1);
    });

    test("renders confetti ribbon", () => {
        const header = findByTestAttr(wrapper, "elm-confetti-ribbon");

        expect(header.length).toBe(200);
    });
});