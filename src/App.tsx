import React, {useEffect} from "react";
import {connect, ConnectedProps} from "react-redux";
import {GameState, TileGrid} from "./types";
import {GameGrid, ConfettiRibbons} from "./components";

import {RootState} from "./redux/store";
import {addMove, newGame, setNoBingo} from "./redux/actions";
import CONFIG from "./config";
import {createGrid} from "./utils";

const mapStateToProps = ({gameState, grid, bingo}: RootState) => ({
    gameState, grid, bingo
});

const connector = connect(mapStateToProps, {newGame, addMove, setNoBingo});

export type AppProps = ConnectedProps<typeof connector>;

/**
 * App component
 * @function DisconnectedApp
 *
 * @param {AppProps} props
 * @constructor
 *
 * @return {JSX.Element}
 */
export const DisconnectedApp = (props: AppProps): JSX.Element => {
    const {gameState, grid, bingo, newGame, setNoBingo, addMove}: AppProps = props;

    useEffect(()=> {
        const grid: TileGrid = createGrid(CONFIG.phrases);
        newGame(grid);
    }, [newGame]);

    useEffect(() => {
        if( bingo ) {
            setTimeout(()=> {
                setNoBingo();
            }, 5000);
        }
    }, [ bingo, setNoBingo ]);

    return (
        <div data-test="component-app" className="d-flex justify-content-center align-items-center vw-100 vh-100">
            {(gameState !== GameState.NOT_STARTED && grid) ?
                <GameGrid data-test="elm-game-grid" grid={grid} addMove={addMove} /> : null}
            {
                bingo ? <ConfettiRibbons data-test="elm-confetti-ribbons" /> : null
            }
        </div>
    );
}

const App = connector(DisconnectedApp);

export default App;
