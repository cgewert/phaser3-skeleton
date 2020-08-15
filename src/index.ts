import * as PHASER from 'phaser';
import { Scene } from './scenes/scene';

export class Game extends PHASER.Game {
  private static GAME_CONFIG: Phaser.Types.Core.GameConfig = {
    title: 'Put Game title here',
    type: PHASER.AUTO,
    scale: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 }
      }
    },
    backgroundColor: '#000000',
    scene: Scene
  }

  constructor(){
    super(Game.GAME_CONFIG);
  }
}

const game = new Game();