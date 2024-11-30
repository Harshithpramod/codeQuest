const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-canvas',
    backgroundColor: '#87ceeb',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let robot, goal, xp = 0;

function preload() {
    this.load.image('robot', 'assets/robot.png');
    this.load.image('goal', 'assets/goal.png');
}

function create() {
    robot = this.add.sprite(100, 500, 'robot');
    goal = this.add.sprite(700, 100, 'goal');
}

function update() {
    // Logic for collision or game state
    if (robot.x === goal.x && robot.y === goal.y) {
        document.getElementById('xp-counter').textContent = `XP: ${++xp}`;
        alert('You completed the level!');
    }
}
