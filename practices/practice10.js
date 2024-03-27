// Task Part 1
class Player {
    constructor(nickName, score) {
        this.nickName = nickName;
        this.score = score;
    }

    getInfo() {
        return `${this.nickName}'s score is ${this.score}`;
    }

    attack(player) {
        this.score += 1;
        return player.score -= 1;
    }

    damage() {
        return this.score -= 1;
    }
}

// Task Part 2
class SuperPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score);
    }

    superAttack(player) {
        this.score += 2;
        return player.score -= 2;
    }
}

// Task Part 3
class HeroPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score);
    }

    heal(player) {
        player.score += 1;
    }
}

// Task Part 4
const player1 = new Player('Player 1', 5);
const player2 = new Player('Player 2', 5);

const superPlayer = new SuperPlayer('Super Player', 3);

const heroPlayer = new HeroPlayer('Hero Player', 10);

// Task Part 5
/*
Execute the attack() method for player1 over player2
-this will decrease player2's score by 1 and increase player1's score by 1
*/
player1.attack(player2); 

/*
Execute the attack() method for player1 over superPlayer
-this will decrease superPlayer's score by 1 and increase player1's score by 1
*/
player1.attack(superPlayer); 

/*
Execute the superAttack() method for superPlayer over player2, player1 and heroPlayer
-this will decrease player2, player1 and heroPlayer's score by 2 and increase superPlayer's score by 6
*/
superPlayer.superAttack(player2);
superPlayer.superAttack(player1);
superPlayer.superAttack(heroPlayer);

/*
Execute the heal() method for heroPlayer over player1 and player2
-this will increase player1 and player2's score by 1
*/
heroPlayer.heal(player1);
heroPlayer.heal(player2);

/*
Execute the attack() method for player1, player2 and heroPlayer over superPlayer
-this will decrease superPlayer's score by 3 and increase player1, player2 and heroPlayer's score by 1
*/
player1.attack(superPlayer);
player2.attack(superPlayer);
heroPlayer.attack(superPlayer);

/*
Execute the damage() method for player1 and player2
-this will decrease player1 and player2's score by 1
*/
player1.damage();
player2.damage();

// Task Part 6
console.log(player1.getInfo());
console.log(player2.getInfo());
console.log(superPlayer.getInfo());
console.log(heroPlayer.getInfo());