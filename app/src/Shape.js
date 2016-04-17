if (typeof _SHAPE_ == 'undefined')
{
	_SHAPE_ = 'defined'

	function Shape(stage, params)
	{
		params = params || {};

		this.x = params.x || 0;
		this.y = params.y || 0;
		this.color = params.color || new Color({red: 16, green: 96, blue: 240});

		this._shape = new createjs.Shape();

		stage.addChild(this._shape);
	}

	Shape.prototype.ToString = function()
	{
		console.log(this);
	}

	Shape.prototype.setColor = function(color)
	{
		this.color = color;
	}

	Shape.prototype.RGBA = function()
	{
		return "rgba(" +
				this.color.r + "," +
				this.color.g + "," + 
				this.color.b + "," + 
				this.color.a + ")";
	}
}