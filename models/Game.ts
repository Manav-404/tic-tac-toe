import { GameWinningStrategy } from "../strategies/gamewinningstrategy/GameWinningStrategy";
import { Board } from "./Board";
import { CellStatus } from "./CellStatus";
import { GameBuilder } from "./GameBuilder";
import { GameStatus } from "./GameStatus";
import { Move } from "./Move";
import { Player } from "./Player";

export class Game {
    private board!: Board;
    
    private players!: Player[];
    
    private moves!: Move[];
    private gameStatus!: GameStatus;

    private winner!: Player;
   
    private nextPlayerIndex!: number;

    private gameWinningStrategy!: GameWinningStrategy;


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

    public getWinner(): Player {
        return this.winner;
    }
    public setWinner(winner: Player) {
        this.winner = winner;
    }

    public getGameWinningStrategy(): GameWinningStrategy {
        return this.gameWinningStrategy;
    }

    public setGameWinningStrategy(gameWinningStrategy: GameWinningStrategy): void {
        this.gameWinningStrategy = gameWinningStrategy;
    }

    public displayBoard(){
        return this.getBoard().display();
    }

    public static getBuilder(){
        return new GameBuilder();
    }

    public async executeMove(): Promise<void>{
        let player = this.getPlayers()[this.getNextPlayerIndex()];
        let move = await player.decideMove();

        let row = move.getCell().getRow();
        let col = move.getCell().getColumn();
        let cell = move.getCell();

        cell.setPlayer(player);
        cell.setCellStatus(CellStatus.FILLED);
        this.board.getBoard()[row][col].setPlayer(player);
        this.board.getBoard()[row][col].setCellStatus(CellStatus.FILLED)
        this.moves.push(move);

        // Check if the player is the winner
        if(this.gameWinningStrategy.checkWinner(this.board, player, cell)){
            this.setWinner(player);
            this.setGameStatus(GameStatus.ENDED)
            return;
        }

        this.setNextPlayerIndex((this.getNextPlayerIndex()+1) % this.getPlayers().length)
        return;
    }



}