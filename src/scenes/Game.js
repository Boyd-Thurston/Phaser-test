import Phaser from "phaser"

class Game extends Phaser.Scene {

  init(){
  }

  preload(){

  }

  create(){

    // create a menu to be reused
    // create node to be reused
    // create link to be reused
    // create link points to be reused

    // prevent default action from being resolved with right click event
    this.game.canvas.oncontextmenu = (e) => e.preventDefault()
    
    let contextMenuIsDisplaying = false
    // handle pointer events
    this.input.on('pointerdown', (pointer) => {
      if(pointer.rightButtonDown()){
        // TODO: add validation to know if background/node or link has been right clicked on
        // TODO: logging to be removed when nolonger needed
        console.log('context menu pressed')
        // creates menu box on right click
        // TODO: seperate menu for reuse once functionality is established
        this.add.rectangle(pointer.x, pointer.y, 100, 50, 0xffffff, 1)
        contextMenuIsDisplaying = true
      }
      // TODO: destroy menu instance when not in use
    }, this)

  }

  update(){

  }
}

export default Game