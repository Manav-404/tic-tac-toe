import { Board } from "./Board";
import { Game } from "./Game";
import { GameStatus } from "./GameStatus";
import { Player } from "./Player";

export class GameBuilder {
        private player!: Player[];
        private dimension!: number;
        
        public getPlayer(): Player[] {
            return this.player;
        }
        public setPlayer(player: Player[]): GameBuilder {
            this.player = player;
            return this;
        }

        public getDimension(): number {
            return this.dimension;
        }
        public setDimension(dimension: number): GameBuilder {
            this.dimension = dimension;
            return this;

        }

        public build(): Game{
            let game: Game = new Game();
            game.setGameStatus(GameStatus.IN_PROGRESS);
            game.setPlayers(this.getPlayer());
            game.setBoard(new Board(this.dimension));
            game.setMoves([])
            game.setNextPlayerIndex(0);
            return game;
            
        }
}