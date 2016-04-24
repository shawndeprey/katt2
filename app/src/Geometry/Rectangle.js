if (typeof _RECTANGLE_ == 'undefined')
{
	_RECTANGLE_ = 'defined'

	function Rectangle(stage, params)
	{
		params = params || {};
		Shape.call(this, stage, params);

		this.width = params.width || 10;
		this.height = params.height || 10;
	}

	Rectangle.prototype = Object.create(Shape.prototype);
	Rectangle.prototype.constructor = Rectangle;

	Rectangle.prototype.SetWidth = function(w)
	{
		this.width = w;
	}

	Rectangle.prototype.SetHeight = function(h)
	{
		this.height = h;
	}

	Rectangle.prototype.Draw = function()
	{
		this._shape.graphics.beginFill(this.color.RGBA()).drawRect(this.x, this.y, this.width, this.height);
	}
}