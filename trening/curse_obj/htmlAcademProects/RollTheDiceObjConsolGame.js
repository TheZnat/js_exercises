// Моя игра (бросаем кости)

let gameRuleset = {
    diceNumber: 1,
    maxAttempts: 2
};

let firstPlayers = {
    name: 'Игрок_1',
    points: 0
};

let secondPlayers = {
    name: 'Игрок_2',
    points: 0
};

let thirdPlayers = {
    name: 'Игрок_3',
    points: 0
};

let playersGame = [firstPlayers, secondPlayers, thirdPlayers];

let throwDice = (min, max) => {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let runGame = function (ruleset, players) {
    for (let currentAttempt = 1; currentAttempt <= ruleset.maxAttempts; currentAttempt++) {
        for (let i = 0; i < players.length; i++) {
            let throwResult = throwDice(ruleset.diceNumber, ruleset.diceNumber * 6);
            players[i].points += throwResult;
            console.log(players[i].name + ' выбросил ' + players[i].points);
        }
    }
    return players;
};

let getWinners = function (players) {
    let winners = [];
    let max = players[0];

    for (let i = 0; i < players.length; i++) {
        let currentPlayer = players[i];
        if (currentPlayer.points > max.points) {
            max = currentPlayer;
            winners = [max];
        } else {
            if (currentPlayer.points === max.points) {
                winners.push(currentPlayer);
            }
        }
    }
    return winners;
};


let printWinners = function (players, winners) {
    if (players.length === winners.length) {
        console.log('Ничья');
        return;
    }

    let message = 'Победил ';

    if (winners.length > 1) {
        message = 'Победили ';
    }

    for (let i = 0; i < winners.length; i++) {
        if (i >= 1) {
            message += ', ';
        }
        message += winners[i].name;
    }
    message += ' с количеством очков: ' + winners[0].points;
    console.log(message);
};

playersGame = runGame(gameRuleset, playersGame);
let winner = getWinners(playersGame);
printWinners(playersGame, winner);