import {BINGO} from "../../action-types";
import BingoReducer from "../bingo-reduer";

test("returns default initial state of `false` when no action is passed", () => {
    const newState = BingoReducer(undefined, {type: undefined});
    expect(newState).toBe(false);
});

test("returns state of `true` upon receiving an action of type `BINGO`", () => {
    const newState = BingoReducer(undefined, {type: BINGO});
    expect(newState).toBe(true);
});