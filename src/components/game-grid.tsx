import {Tile, TileGrid, TileGridPosition, TileRow} from "../types";
import React, {CSSProperties} from "react";

export interface GameGridProps {
    grid: TileGrid;
    addMove: (position: TileGridPosition) => void;
}

/**
 * GameGrid component - renderers game board
 * @function GameGrid
 *
 * @param {GameGridProps} props
 * @constructor
 *
 * @return {JSX.Element}
 */
const GameGrid = (props: GameGridProps): JSX.Element => {
    const {grid, addMove} = props;

    const style: CSSProperties = {
        gridTemplateRows: `repeat(${grid.length}, 1fr)`,
        gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`
    };

    return (
        <div data-test="component-game-grid"  className="game-grid-container">
            <div className="game-grid-wrapper">
                <div className="game-grid" style={style}>
                    {
                        grid.map((row: TileRow, ri: number) => (
                            row.map((tile: Tile, ci: number) => (
                                <div data-test="grid-tile" key={`${ri}-${ci}`}
                                     className={(`d-flex flex-column grid-tile ` + (tile.traversed ? "traversed" : ""))}
                                     {...(!tile.traversed && { onClick: () => addMove({x: ri, y: ci}) })}>
                                    <div className="grid-tile-inner flex-1 d-flex text-center justify-content-center align-items-center m-2 p-1"><span>{tile.phrase}</span></div>
                                </div>
                            ))
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default GameGrid;
