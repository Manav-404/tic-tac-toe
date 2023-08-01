import { input } from "../main";
import { Cell } from "./Cell";
import { Move } from "./Move";
import { PlayerType } from "./PlayerType";

export class Player {
    private name: string;
    private symbol: string
    private playerType: PlayerType

    constructor (name:string, symbol: string, playerType: PlayerType){
        this.name = name;
        this.symbol = symbol;
        this.playerType = playerType;
    }
    
    public getName(): string {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }

    public getSymbol(): string{
        return this.symbol;
    }

    public setSymbol(symbol: string): void{
        this.symbol = symbol;
    }

    public getPlayerType(): PlayerType{
        return this.playerType
    }

    public setPlayerType(playerType: PlayerType): void{
        this.playerType = playerType;
    }


    public async decideMove(): Promise<Move>{
        let row = await Number(input('Please enter the row'));
        let col = await Number(input('Please enter the col'));

        return new Move(this, new Cell(row, col));


    }


    
}