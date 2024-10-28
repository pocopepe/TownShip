import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene {
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor() {
        super('MainMenu');
    }

    create() {
        // Center and scale the background to fill the screen
        this.background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'background');
        this.background.setDisplaySize(this.scale.width, this.scale.height);

        // Center and scale the logo
        this.logo = this.add.image(this.scale.width / 2, this.scale.height * 0.4, 'logo');
        this.logo.setScale(Math.min(this.scale.width / 1080, this.scale.height / 768)); // Adjust scale for responsiveness

        // Center and scale the title text
        this.title = this.add.text(this.scale.width / 2, this.scale.height * 0.6, 'Main Menu', {
            fontFamily: 'Arial Black',
            fontSize: `${this.scale.width * 0.05}px`, // Scale font size based on screen width
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Start the Game scene on pointer down
        this.input.once('pointerdown', () => {
            this.scene.start('Game');
        });

        // Listen for window resize and adjust layout
        this.scale.on('resize', this.resize, this);
    }

    // Resize handler to adjust the layout dynamically
    resize(gameSize: Phaser.Structs.Size) {
        const width = gameSize.width;
        const height = gameSize.height;

        // Resize and reposition background
        this.background.setPosition(width / 2, height / 2);
        this.background.setDisplaySize(width, height);

        // Adjust logo position and scale
        this.logo.setPosition(width / 2, height * 0.4);
        this.logo.setScale(Math.min(width / 1080, height / 768));

        // Adjust title position and font size
        this.title.setPosition(width / 2, height * 0.6);
        this.title.setFontSize(width * 0.05); // Adjust font size based on width
    }
}
