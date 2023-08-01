import { Cell } from "./Cell";
import { CellStatus } from "./CellStatus";

export class Board {
    private board : Cell[][]
    constructor( dimension: number){
        this.board = new Array(dimension)
        for(let i=0; i<dimension; i++){
            this.board.push([]);
            for(let j=0; j<dimension; j++){
                this.board[i].push(new Cell(i, j));
            }
        }
    }
    public getBoard() : Cell[][]{
        return this.board;
    }

    public setBoard(board: Cell[][]): void{
        this.board = board
    }

    public display(){
        let dimension = this.getBoard().length
        for(let i=0; i<dimension; i++){
            for(let j=0; j<dimension; j++){
                if(this.getBoard()[i][j].getCellStatus()===CellStatus.EMPTY){
                    console.log("| |")
                }else{
                    console.log(`| ${this.getBoard()[i][j].getPlayer().getSymbol()} |`)
                }
            }
        }
    }

}