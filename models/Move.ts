import { Cell } from "./Cell";
import { Player } from "./Player";

export class Move {
    private player!: Player;
    private cell!: Cell;

    constructor(player: Player, cell: Cell){
        this.player = player;
        this.cell = cell;
    }

    public getPlayer(): Player {
        return this.player;
    }
    public setPlayer(player: Player) {
        this.player = player;
    }

    public getCell(): Cell {
        return this.cell;
    }
    public setCell(cell: Cell) {
        this.cell = cell;
    }


}