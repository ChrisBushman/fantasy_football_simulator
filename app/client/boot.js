var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

var game = new Phaser.Game(config);

game.scene.add("Title", TitleScene);
game.scene.start("Title");