if (typeof _CIRCLE_ == 'undefined')
{
	_CIRCLE_ = 'defined'

	function Circle(stage, params)
	{
		params = params || {};
		Shape.call(this, stage, params);

		this.radius = params.radius || 10;
	}

	Circle.prototype = Object.create(Shape.prototype);
	Circle.prototype.constructor = Circle;

	Circle.prototype.SetRadius = function(r)
	{
		this.radius = r;
	}

	Circle.prototype.Draw = function()
	{
		Shape.prototype.Draw.call(this);
		this._shape.graphics.beginFill(this.color.RGBA()).drawCircle(this.x, this.y, this.radius);
	}
}