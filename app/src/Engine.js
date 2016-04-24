if (typeof _ENGINE_ == 'undefined')
{
	_ENGINE_ = 'defined'
	
	var stage;

	function main()
	{
		SetupCanvas(800, 600);

		circle = new Circle(stage, {x: 100, y: 100, radius: 25});
		rectangle = new Rectangle(stage, { x: 150, y: 150, width: 20, height: 20 });

		requestAnimationFrame(GameLoop);
	}

	function SetupCanvas(width, height)
	{
		console.log("Setting up " + width + "x" + height + " canvas...");
		var canvas = document.getElementById("canvas");
		canvas.width = width;
		canvas.height = height;

		stage = new createjs.Stage(canvas);
		console.log("Canvas setup complete.");
	}

	function GameLoop()
	{
		Update();
		Render();

		requestAnimationFrame(GameLoop);
	}

	function Update()
	{
		circle.x += 0.5;
	}

	function Render()
	{
		stage.clear();


		circle.Draw();
		rectangle.Draw();


		stage.update();
	}
}