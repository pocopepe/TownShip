import { Boot } from './scenes/Boot';
import { Game as MainGame } from './scenes/Game';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';

import { Game, type Types } from "phaser";

const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: window.innerWidth, // Full width
    height: window.innerHeight, // Full height
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.RESIZE, // Automatically resize the game
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        MainGame,
    ]
};

const game = new Game(config);

// Optional: Add an event listener to resize the game when the window size changes
window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
});

export default game;
