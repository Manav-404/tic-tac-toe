import { Cell } from "./Cell";

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

}