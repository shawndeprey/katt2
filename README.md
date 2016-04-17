# Ethereal

A high-action, 2D space-shooter!


### General Game Stuff

* Simple game, not too complicated
* Must be completeable
* Javascript/HTML5
* Space generation (random)
* 2D
* Fast-paced
* High-action
* Parallax backgrounds with 'foreground' layer (above player)
* Particles!!!
* Special Move indicators (Capcom vs Marvel)

### Game Mechanics

* 3 scenes: ship, map and battles
* Each crew member of your ship has a basic story
* Each crew member has 2 tiers of stats
* Star map has an optional mission for each characters story (Star Fox 64)
* If you complete crew member's mission, their stats go to tier 2

### Technology

* NodeJS v5.10.1		https://nodejs.org/dist/v5.10.1/node-v5.10.1-x64.msi
* Node Webkit Wrapper	https://github.com/nwjs/nw.js
* CreateJS				http://www.createjs.com/
* Inno Setup			http://www.jrsoftware.org/isinfo.php

### TODO
- [ ] Story:		Asset Loader
- [	] Story:		Set up Material Design style GUI in canvas
- [x] Story:			Create basic shape classes
- [x] Story:				Rectangle
- [x] Story:				Circle
- [x] Story:			Create basic color class
- [ ] Story:			Create a text class
- [x] Story:				Use Roboto font
- [ ] Story:		Image support for shapes
- [ ] Story:		Sprite class

- [ ] BUG:			Clean up canvas/window size mis-matching
- [x] BUG:			Put in pause breaks for all tool scripts (Debug mode only)

- [ ] RESEARCH:		How to easily add new assets to Inno Setup Script.
- [ ] RESEARCH:		How do updates/patches (Like ClickOnce for C#) work.
- [ ] RESEARCH:		Use Manifest file to pass command line args (Environment Variables) to the application
- [ ] RESEARCH:		How to have a launcher download and install the application
- [ ] RESEARCH:		Cross-platform installer builder OR custom cross-platform installer

- [x] TASK:			Get zip script figured out for Windows 7
- [ ] TASK:			Icon for game window
- [ ] TASK: 		Create 'Aliases' file to mitigate deprecation extra-work
- [ ] TASK:			Auto-resize canvas to fit window
- [x] TASK:			In build_d.bat, store base folder name in variable to reset it later
- [ ] TASK:			Use build script to 'package' the package.json in prior to building
- [ ] TASK:			Build script can choose which version to build; dev, testing, production, etc...
- [ ] TASK:			Setup deploy script to build installer for deployment
- [ ] TASK:			Create license file
