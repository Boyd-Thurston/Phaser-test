# Phaser-test

Phaser3 test, testing the idea of making a game tool that can create new nodes that can then be linked to one another whilst saving the details about which node is linked to which. Al this to be done in a phaser application under the idea it could be used as module inside of other larger phaser applications.

# MVP Goals

As a user I want to be able to add and remove a node from the game tool window.

## creating/removing nodes
- [ ] context menu created for main window
- [ ] add node call in context menu
- [ ] node added successfully to game window
- [ ] context menu created for node
- [ ] remove node call in context menu
- [ ] node removed successfully from game window
- [ ] annimation/shade change for node that is selected and displaying its context menu

As a user I want to be able to link nodes to one another.

## creating/removing links
- [ ] add link call in context menu
- [ ] link added successfully to game window
- [ ] functionality to attach link to a node
- [ ] functionality to attach link to a secound node
- [ ] functionality for game tool to reconise that nodes are linked
- [ ] context menu created for link
- [ ] remove link call in context menu
- [ ] link removed successfully from game window
- [ ] link removed successfully from functionality for game tool to reconise that nodes are linked
- [ ] minor animation for attaching links to nodes

# Stretch Goals

As a user I want to be able to change my mind and reasinge a link to a different node.

## reasigning links
- [ ] points where links attache to nodes can be interacted with
- [ ] points are moveable to another node
- [ ] functionality updates which nodes are linked
- [ ] moving animation successfully displays

As a user I want to be able to save my work.
As a user I want to be able to load my saved work.

## read/write form JSON
- [ ] write node objects to JSON
- [ ] node links successfuly saved when writen to JSON
- [ ] read node objects from JSON
- [ ] node objects successfully actioned in game tool
- [ ] game tool maps nodes and links from JSON data and initilises ellements based on date to game window