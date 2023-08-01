import { Board } from "../../models/Board";
import { Cell } from "../../models/Cell";
import { Player } from "../../models/Player";
import { GameWinningStrategy } from "./GameWinningStrategy";

export class OrderOneGameWinningStrategy implements GameWinningStrategy{
    private rowCount!: Map<string, number>[]
    private colCount!: Map<string, number>[]
    private leftDiagnolCount!: Map<string, number>;
    private rightDiagnolCount!: Map<string, number>;


    public constructor(dimension: number){
        for(let i=0; i<dimension; i++){
            this.rowCount.push(new Map<string, number>())
            this.colCount.push(new Map<string, number>());

        }
    }
    checkWinner(board: Board, player: Player, cell: Cell): boolean {

        let row =cell.getRow();
        let col = cell.getColumn();
        let symbol = player.getSymbol();
        let dimension = board.getBoard().length;
        let rowMap = this.rowCount[row];
        let colMap = this.colCount[col];
        rowMap.set(symbol, rowMap.get(symbol) ? rowMap.get(symbol)!+1: 0)
        colMap.set(symbol, colMap.get(symbol) ? colMap.get(symbol)!+1: 0)

        if(rowMap.get(symbol)===dimension || colMap.get(symbol)===dimension){
            return true;
        }

        if(row === col){
            this.leftDiagnolCount.set(symbol, this.leftDiagnolCount.get(symbol)!==undefined ? this.leftDiagnolCount.get(symbol)!+1 : 0)
        }

        if(row+col === dimension-1){
            this.rightDiagnolCount.set(symbol, this.rightDiagnolCount.get(symbol)!==undefined ? this.rightDiagnolCount.get(symbol)!+1 : 0)

        }

        if(row === col && this.leftDiagnolCount.get(symbol)===dimension){
            return true;
        }

        if(row+col === dimension-1 && this.rightDiagnolCount.get(symbol)===dimension){
            return true
        }

        return false;
    }

}