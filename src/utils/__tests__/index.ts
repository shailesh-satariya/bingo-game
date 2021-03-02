import {Tile, TileGrid, TileGridPosition} from "../../types";
import {
    cloneGrid,
    createGrid,
    getTile, is1stDiagonalTraversed, is2ndDiagonalTraversed, isColumnTraversed, isRowTraversed,
    isTraversed
} from "../index";
import CONFIG from "../../config";

describe("createGrid, getTile", () => {
    let grid: TileGrid;
    const phrases: string[] = CONFIG.phrases as string[];

    beforeEach(() => {
        grid = createGrid(phrases);
    });

    describe("createGrid", () => {
        test("returns correct grid with correct size", () => {
            const sqrt: number = Math.floor(Math.sqrt(phrases.length));
            expect(grid.length).toBe(sqrt);
            expect(grid[0].length).toBe(sqrt);
        });

        test("returns correct grid with correct values", () => {
            expect(phrases.includes(grid[0][0].phrase)).toBe(true);

            // The first tile must be traversed
            expect(grid[0][0].traversed).toBe(false);
        });
    });

    describe("getTile", () => {
        test("returns correct tile when correct position specified", () => {
            const tile: Tile | null = getTile(grid, 1, 1);

            expect(tile).not.toBe(null);
            expect(tile && phrases.includes(tile.phrase)).toBe(true);
        });

        test("returns null when incorrect position specified", () => {
            const tile: Tile | null = getTile(grid, -1, 0);

            expect(tile).toBe(null);
        });
    });
});


describe("isTraversed", () => {
    test("returns true when all tiles have been traversed", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: true}],
            [{phrase: 'baz', traversed: true}, {phrase: 'far', traversed: true}],
        ];

        const bTraversed: boolean = isTraversed(grid);
        expect(bTraversed).toBe(true);
    });

    test("returns false when all tiles not have been traversed", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: true}],
            [{phrase: 'baz', traversed: true}, {phrase: 'far', traversed: false}],
        ];

        const bTraversed: boolean = isTraversed(grid);
        expect(bTraversed).toBe(false);
    });
});

describe("isRowTraversed", () => {
    const position: TileGridPosition = {x: 0, y: 1};
    test("returns true a row for given position is traversed traversed", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: true}],
            [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
        ];

        const bTraversed: boolean = isRowTraversed(grid, position);
        expect(bTraversed).toBe(true);
    });

    test("returns false a row for given position is not traversed traversed", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: false}],
            [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
        ];

        const bTraversed: boolean = isRowTraversed(grid, position);
        expect(bTraversed).toBe(false);
    });
});


describe("isColumnTraversed", () => {
    const position: TileGridPosition = {x: 1, y: 0};
    test("returns true a column for given position is traversed traversed", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: false}],
            [{phrase: 'baz', traversed: true}, {phrase: 'far', traversed: false}],
        ];

        const bTraversed: boolean = isColumnTraversed(grid, position);
        expect(bTraversed).toBe(true);
    });

    test("returns false a column for given position is not traversed traversed", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: false}],
            [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
        ];

        const bTraversed: boolean = isColumnTraversed(grid, position);
        expect(bTraversed).toBe(false);
    });
});

describe("is1stDiagonalTraversed", () => {
    const position: TileGridPosition = {x: 1, y: 1};
    test("returns true a diagonal for given position is traversed traversed", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: false}],
            [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: true}],
        ];

        const bTraversed: boolean = is1stDiagonalTraversed(grid, position);
        expect(bTraversed).toBe(true);
    });

    test("returns false a row for given position is not traversed traversed", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: false}],
            [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
        ];

        const bTraversed: boolean = is1stDiagonalTraversed(grid, position);
        expect(bTraversed).toBe(false);
    });
});


describe("is2ndDiagonalTraversed", () => {
    const position: TileGridPosition = {x: 1, y: 0};
    test("returns true a column for given position is traversed traversed", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: false}, {phrase: 'bar', traversed: true}],
            [{phrase: 'baz', traversed: true}, {phrase: 'far', traversed: false}],
        ];

        const bTraversed: boolean = is2ndDiagonalTraversed(grid, position);
        expect(bTraversed).toBe(true);
    });

    test("returns false a column for given position is not traversed traversed", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: true}, {phrase: 'bar', traversed: false}],
            [{phrase: 'baz', traversed: false}, {phrase: 'far', traversed: false}],
        ];

        const bTraversed: boolean = is2ndDiagonalTraversed(grid, position);
        expect(bTraversed).toBe(false);
    });
});


describe("cloneGrid", () => {
    test("returns correctly cloned grid", () => {
        const grid: TileGrid = [
            [{phrase: 'foo', traversed: false}, {phrase: 'bar', traversed: true}],
            [{phrase: 'baz', traversed: true}, {phrase: 'far', traversed: false}],
        ];

        const clonedGrid: TileGrid = cloneGrid(grid);
        expect(clonedGrid).toEqual(grid);
    });
});