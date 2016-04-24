if (typeof _TEXT_BOX_ == 'undefined')
{
	_TEXT_BOX_ = 'defined'

	function TextBox(stage, params)
	{
		params = params || {};
		Shape.call(this, stage, params);

		this.text = new Text({	color: params.color,
								text: params.text,
								fontSize: params.fontSize,
								font: params.font,
								x: params.x,
								y: params.y
								});
	}

	TextBox.prototype = Object.create(Rectangle.prototype);
	TextBox.prototype.constructor = TextBox;

	TextBox.prototype.SetWidth = function(w)
	{
		this.width = w;
	}

	TextBox.prototype.SetHeight = function(h)
	{
		this.height = h;
	}

	TextBox.prototype.Draw = function()
	{
		this._shape.graphics.beginFill(this.color.RGBA()).drawRect(this.x, this.y, this.width, this.height);
	}
}