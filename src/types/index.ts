export enum GameState {
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    SOLVED = "SOLVED"
}

export type TileGrid = TileRow[];
export type TileRow = Tile[];

export interface Tile {
    phrase: string;
    traversed: boolean;
}

export interface TileGridPosition {
    x: number;
    y: number;
}
