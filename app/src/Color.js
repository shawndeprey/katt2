if (typeof _COLOR_ == 'undefined')
{
	_COLOR_ = 'defined'

	function Color(params)
	{
		params = params || {};

		this.r = params.r || params.red		|| 16;
		this.g = params.g || params.green	|| 96;
		this.b = params.b || params.blue	|| 220;
		this.a = params.a || params.alpha	|| 255;
	}

	Color.prototype.ToString = function()
	{
		console.log(this);
	}

	Color.prototype.RGBA = function()
	{
		return "rgba(" + this.r + "," +
						 this.g + "," + 
						 this.b + "," + 
						 this.a + ")";
	}
}