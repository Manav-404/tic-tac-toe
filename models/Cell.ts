import { CellStatus } from "./CellStatus";
import { Player } from "./Player";

export class Cell{
    private row : number;
    private col: number;
    private cellStatus: CellStatus
    private player!: Player; 

    constructor(row: number, col: number){
        this.row = row;
        this.col = col;
        this.cellStatus = CellStatus.EMPTY

    }
    public getRow(): number{
        return this.row;
    }

    public setRow(row: number): void{
        this.row = row;
    }

    public getColumn(): number{
        return this.col;
    }

    public setColumn(col: number): void{
        this.col = col;
    }

    public getCellStatus(): CellStatus{
        return this.cellStatus;
    }

    public setCellStatus(status: CellStatus): void{
        this.cellStatus = status
    }

    public getPlayer(): Player{
        return this.player;
    }

    public setPlayer(player: Player): void{
        this.player = player;
    }


    

}

