import { Scene } from 'phaser';

export class Game extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text: Phaser.GameObjects.Text;

    constructor() {
        super('Game');
    }

    create() {
        // Set up camera and background color
        this.camera = this.cameras.main;

        // Add background image, position in center, and set initial scale
        this.background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'background');
        this.background.setDisplaySize(this.scale.width, this.scale.height);

        // Add text, centered, and scaled based on the screen size
        this.msg_text = this.add.text(this.scale.width / 2, this.scale.height / 2, 'This is where your game goes', {
            fontFamily: 'Arial Black',
            fontSize: '4vw', // Set font size relative to viewport width
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 4,
            align: 'center',
        });
        this.msg_text.setOrigin(0.5);

        // Start 'GameOver' scene on click
        this.input.once('pointerdown', () => {
            this.scene.start('MainMenu');
        });

        // Resize handler to update positions and scaling on window resize
        this.scale.on('resize', this.resize, this);
    }

    // Resize method to update display size and text position
    resize(gameSize: Phaser.Structs.Size) {
        const width = gameSize.width;
        const height = gameSize.height;

        // Update camera bounds and background display size
        this.camera.setBounds(0, 0, width, height);
        this.background.setPosition(width / 2, height / 2);
        this.background.setDisplaySize(width, height);

        // Re-center text
        this.msg_text.setPosition(width / 2, height / 2);
    }
}
