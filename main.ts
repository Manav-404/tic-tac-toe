import { stdin, stdout } from 'process'
import readline from 'readline'
import { Player } from './models/Player';
import { PlayerType } from './models/PlayerType';
import { Bot } from './models/Bot';
import { BotDifficulty } from './models/BotDifficulty';
import { GameController } from './controller/GameController';
let cmd = readline.createInterface({input: stdin, output: stdout});
const main  = async ()=>{


    let players: Player[] = []

    let gameController = new GameController();

    let dimensionsInfo = await input('What is the dimension of the board?');
    let isBot = await input("Do you want bot as a opponent?");
    let numberOfPlayers = Number(dimensionsInfo.trim()) -1;
    if(isBot.trim() === 'y'){
        numberOfPlayers = Number(dimensionsInfo.trim()) -2;
    }

    for(let i=0; i<numberOfPlayers; i++){
        let playerName = await input("What is name of the player?");
        let playerSymbol = await input("What is the symbol for player?");

        players.push(new Player(playerName, playerSymbol, PlayerType.HUMAN));
    }

    if(isBot.trim() == 'y'){
        let botName = await input("What is name of the bot?");
        let botSymbol = await input("What is the symbol for bot?");
        players.push(new Bot(botName, botSymbol, PlayerType.BOT, BotDifficulty.EASY));
    }

    let game = gameController.createGame(players, Number(dimensionsInfo))

}

function input(command: string): Promise<string>{
    return new Promise((resolve, reject)=>{
        cmd.question(command, (answer)=>{
            resolve(answer);
         })
    })
     
}

main()