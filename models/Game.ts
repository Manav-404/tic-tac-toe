import { Board } from "./Board";
import { GameStatus } from "./GameStatus";
import { Move } from "./Move";
import { Player } from "./Player";

export class Game {
    private board!: Board;
    
    private players!: Player[];
    
    private moves!: Move[];
    private gameStatus!: GameStatus;
   
    private nextPlayerIndex!: number;

    public getBoard(): Board {
        return this.board;
    }
    public setBoard(board: Board) {
        this.board = board;
    }

    public getMoves(): Move[] {
        return this.moves;
    }
    public setMoves(moves: Move[]) {
        this.moves = moves;
    }

    public getGameStatus(): GameStatus {
        return this.gameStatus;
    }
    public setGameStatus(gameStatus: GameStatus) {
        this.gameStatus = gameStatus;
    }

    public getPlayers(): Player[] {
        return this.players;
    }
    public setPlayers(players: Player[]) {
        this.players = players;
    }

    public getNextPlayerIndex(): number {
        return this.nextPlayerIndex;
    }
    public setNextPlayerIndex(index: number) {
        this.nextPlayerIndex = index;
    }


}