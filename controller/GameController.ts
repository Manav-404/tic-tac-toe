import { Game } from "../models/Game";
import { Player } from "../models/Player";

export class GameController {

    public createGame(players: Player[], dimension: number){
        return Game.getBuilder().setPlayer(players).setDimension(dimension).build()
    }

    public displayBoard(game: Game){
        return game.displayBoard();
    }
}