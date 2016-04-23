if (typeof _ENGINE_ == 'undefined')
{
	_ENGINE_ = 'defined'
	
	function main()
	{
		SetupCanvas(800, 600);

		Sandbox();
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




	function Sandbox()
	{
		// Text sample
		var text = new Text(stage, {x: 200, y: 200, text: "Hello World"});
		text.Draw();

		// Circle sample
		var circle = new Circle(stage);
		circle.Draw();


		// Rectangle sample (stage, x, y, height, width)
		var rectangle = new Rectangle(stage, { x: 150, y: 150, width: 20, height: 20 });
		rectangle.Draw();
		

		stage.update();
	}
}