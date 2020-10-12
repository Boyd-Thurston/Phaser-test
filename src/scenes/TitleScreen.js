import Phaser from "phaser"

class TitleScreen extends Phaser.Scene {

  preload(){

  }

  create(){

    this.add.text(0.5, 0.5, 'Pong')
  }
}


export default TitleScreen