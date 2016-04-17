function main()
{
	SetupCanvas();

	Sandbox();
}

function SetupCanvas()
{
	console.log("Setting up canvas...");
	var canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 600;

	stage = new createjs.Stage(canvas);
	console.log("Canvas setup complete.");
}




function Sandbox()
{
	// Text sample
	myText = new createjs.Text("Hello World", "36px Roboto", "#ffffff");
	myText.x = 10;
	myText.y = 50;

	stage.addChild(myText);


	// Circle sample
	var circle = new Circle(stage);
	circle.Draw();
	circle.ToString();


	// Rectangle sample (stage, x, y, height, width)
	var rectangle = new Rectangle(stage, { x: 150, y: 150, width: 20, height: 20 });
	rectangle.Draw();
	

	stage.update();
}