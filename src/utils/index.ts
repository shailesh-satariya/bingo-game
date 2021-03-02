import {Tile, TileGrid, TileGridPosition, TileRow} from "../types";


const shuffle = (array: any[]): any => {
    let currentIndex: number = array.length;
    let temporaryValue: any;
    let randomIndex: number;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

/**
 * Creates grid for new game
 * @function createGrid
 *
 * @param {pharses} string[]
 *
 * @return {TileGrid}
 */
const createGrid = (pharses: string[]): TileGrid => {
    const columns: number = Math.floor(Math.sqrt( pharses.length ));
    const rows: number = columns;
    const sPhrases: string[] = shuffle(pharses);

    let i: number = 0;
    const grid: TileGrid = Array.from({length: rows}).map((): Tile[] =>
        Array.from({length: columns}).map((): Tile => ({
            phrase: sPhrases[i++],
            traversed: false
        }))
    );

    return grid;
}

/**
 * Clones the given grid
 * @function cloneGrid
 *
 * @param {TileGrid} grid
 *
 * @return {TileGrid}
 */
const cloneGrid = (grid: TileGrid): TileGrid => grid.map((row: TileRow): TileRow =>
    row.map(({phrase, traversed}: Tile): Tile => ({phrase, traversed}))
);

/**
 * Gets tile at given position
 * @function getTile
 * @param {TileGrid} grid
 * @param {number} x
 * @param {number} y
 *
 * @return {Tile | null}
 */
const getTile = (grid: TileGrid, x: number, y: number): Tile | null => {
    return grid[x] && grid[x][y] ? grid[x][y] : null;
};

/**
 * Checks whether grid is fully traversed on not
 * @function isTraversed
 *
 * @param {TileGrid} grid
 *
 * @return {boolean}
 */
const isTraversed = (grid: TileGrid): boolean => {
    for (const row of grid) {
        for (const tile of row) {
            if (!tile.traversed) {
                return false;
            }
        }
    }

    return true;
};

/**
 *
 * isRowTraversed
 *
 * @param {TileGrid} grid
 * @param {TileGridPosition} position
 *
 * @return {boolean}
 */
const isRowTraversed = ( grid: TileGrid, position: TileGridPosition ): boolean => {
    const row: number = position.x;

    if( !grid[row] ) {
        return false;
    }

    for( let i = 0; i < grid.length; i++ ) {
        const tile: Tile = grid[row][i];
        if( !tile || !tile.traversed ) {
            return false;
        }
    }

    return true;
};

/**
 *
 * isColumnTraversed
 *
 * @param {TileGrid} grid
 * @param {TileGridPosition} position
 *
 * @return {boolean}
 */
const isColumnTraversed = ( grid: TileGrid, position: TileGridPosition ): boolean => {
    const column: number = position.y;

    for( let i = 0; i < grid.length; i++ ) {
        const tile: Tile | null = grid[i] && grid[i][column] ? grid[i][column] : null;
        if( !tile || !tile.traversed ) {
            return false;
        }
    }

    return true;
};


/**
 *
 * is1stDiagonalTraversed
 *
 * @param {TileGrid} grid
 * @param {TileGridPosition} position
 *
 * @return {boolean}
 */
const is1stDiagonalTraversed = ( grid: TileGrid, position: TileGridPosition ): boolean => {
    if( position.x !== position.y ) {
        return false;
    }

    for( let i = 0; i < grid.length; i++ ) {
        const tile: Tile | null = grid[i] && grid[i][i] ? grid[i][i] : null;
        if( !tile || !tile.traversed ) {
            return false;
        }
    }

    return true;
};

/**
 *
 * is1stDiagonalTraversed
 *
 * @param {TileGrid} grid
 * @param {TileGridPosition} position
 *
 * @return {boolean}
 */
const is2ndDiagonalTraversed = ( grid: TileGrid, position: TileGridPosition ): boolean => {
    const total : number = position.x + position.y;
    if( total !== (grid.length - 1 ) ) {
        return false;
    }

    for( let i = 0; i < grid.length; i++ ) {
        const x: number = i;
        const y: number = grid.length - i - 1;
        const tile: Tile | null = grid[x] && grid[x][y] ? grid[x][y] : null;
        if( !tile || !tile.traversed ) {
            return false;
        }
    }

    return true;
};

export {
    cloneGrid,
    createGrid,
    isTraversed,
    getTile,
    isRowTraversed,
    isColumnTraversed,
    is1stDiagonalTraversed,
    is2ndDiagonalTraversed
};
