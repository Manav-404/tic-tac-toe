import { Board } from "../../models/Board";
import { Cell } from "../../models/Cell";
import { Player } from "../../models/Player";

export interface GameWinningStrategy {
    checkWinner(board: Board, player: Player, cell:  Cell): boolean
}