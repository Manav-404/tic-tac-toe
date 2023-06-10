import { BotDifficulty } from "./BotDifficulty";
import { Player } from "./Player";
import { PlayerType } from "./PlayerType";

export class Bot extends Player{
    private botDifficultyLevel: BotDifficulty;

    constructor(name: string, symbol: string, playerType: PlayerType, difficultyLevel: BotDifficulty){
        super(name, symbol, playerType);
        this.botDifficultyLevel = difficultyLevel
    }

    public getBotDifficultyLevel(): BotDifficulty {
        return this.botDifficultyLevel;
    }
    public setBotDifficultyLevel(difficultyLevel: BotDifficulty) {
        this.botDifficultyLevel = difficultyLevel;
    }
}