const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: '#d3ffce',
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

const game = new Phaser.Game(config);
let body;
let keyboard;

function preload() {
    this.load.image('corpo', 'assets/corpo.png');
}

function create() {
    body = this.add.group({
        key: 'corpo',
        setXY: { x: 200, y: 200 },
        setScale: { x: 5, y: 5 },
    });

    keyboard = this.input.keyboard.createCursorKeys();
}

function update() {
    const x = body.getChildren()[0].x;
    const y = body.getChildren()[0].y;

    if (keyboard.left.isDown) {
        Phaser.Actions.ShiftPosition(body.getChildren(), x - 20, y);
    } else if (keyboard.right.isDown) {
        Phaser.Actions.ShiftPosition(body.getChildren(), x + 20, y);
    } else if (keyboard.up.isDown) {
        Phaser.Actions.ShiftPosition(body.getChildren(), x, y - 20);
    } else if (keyboard.down.isDown) {
        Phaser.Actions.ShiftPosition(body.getChildren(), x, y + 20);
    }
}
