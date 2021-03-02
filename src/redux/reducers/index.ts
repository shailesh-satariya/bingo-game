import {combineReducers} from "redux";
import GameStateReducer from "./game-state-reducer";
import GridReducer from "./grid-reducer";
import InitialGridReducer from "./initial-grid-reducer";
import MovesReducer from "./moves-reducer";
import BingoReducer from "./bingo-reduer";

export default combineReducers({
    gameState: GameStateReducer,
    grid: GridReducer,
    initialGrid: InitialGridReducer,
    moves: MovesReducer,
    bingo: BingoReducer
});
