if (typeof _TEXT_ == 'undefined')
{
	_TEXT_ = 'defined'

	function Text(stage, params)
	{
		params = params || {};

		this.color = params.color || new Color();
		this.text = params.text || "";
		this.fontSize = params.fontSize || "36px";
		this.font = params.font || "Roboto";
		this.fontString = this.fontSize + " " + this.font;		

		this._text = new createjs.Text(this.text, this.fontString, this.color.RGBA());
		this.x = this._text.x = params.x || 0;
		this.y = this._text.y = params.y || 0;

		this._stage = stage;
	}

	Text.prototype.ToString = function()
	{
		console.log(this);
	}

	Text.prototype.GetWidth = function()
	{
		// TODO: This is expensive, implement a cache-ing logic
		//		 with property-like access control
		return this._text.getMeasuredWidth();
	}

	Text.prototype.GetHeight = function()
	{
		// TODO: This is expensive, implement a cache-ing logic
		//		 with property-like access control
		return this._text.getMeasuredHeight();
	}

	Text.prototype.SetColor = function(color)
	{
		this.color = color;
	}

	Text.prototype.Draw = function()
	{
		this._stage.addChild(this._text);
	}
}