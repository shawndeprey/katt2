function Color(params)
{
	params = params || {};
	
	this.r = params.r || params.red		|| 0;
	this.g = params.g || params.green	|| 0;
	this.b = params.b || params.blue	|| 0;
	this.a = params.a || params.alpha	|| 255;
}