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
    let contextMenu
    let contextMenuIsDisplaying = false
    // handle pointer events
    this.input.on('pointerdown', (pointer) => {
      if(pointer.rightButtonDown()){
        // TODO: add validation to know if background/node or link has been right clicked on
        // TODO: logging to be removed when nolonger needed
        console.log('context menu pressed')
        // check to see if menu is already open and clear if it is
        contextMenuIsDisplaying && contextMenu.destroy()
        // creates menu box on right click
        // TODO: seperate menu for reuse once functionality is established
        contextMenu = this.add.container(pointer.x, pointer.y, [
          this.add.rectangle(0, 0, 100, 20, 0xffffff, 1),
          this.add.text(-45, -7, 'add wire', {
            fill: 'black'
          })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { 
              console.log("cotext menu option pressed")
              contextMenu.destroy()
            })
        ])
        contextMenuIsDisplaying = true
      }
      // TODO: destroy menu instance when not in use
    }, this)

  }

  update(){

  }
}

export default Game