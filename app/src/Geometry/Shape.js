if (typeof _SHAPE_ == 'undefined')
{
	_SHAPE_ = 'defined'

	function Shape(stage, params)
	{
		params = params || {};

		this.x = params.x || 0;
		this.y = params.y || 0;
		this.color = params.color || new Color();

		this._shape = new createjs.Shape();

		stage.addChild(this._shape);
	}

	Shape.prototype.ToString = function()
	{
		console.log(this);
	}

	Shape.prototype.SetColor = function(color)
	{
		this.color = color;
	}

	Shape.prototype.Draw = function()
	{
		this._shape.graphics.clear();
	}
}