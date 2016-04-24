function AssetManager()
{
	this.successCount = 0;
	this.errorCount = 0;
	this.assetCache = [];
	this.downloadQueue = [];
}

AssetManager.prototype.Enqueue = function(path)
{
	// TODO: Verify path is correct/can be found
	this.downloadQueue.push(path);
}

AssetManager.prototype.DownloadAll = function(completeCallback)
{
	if (this.downloadQueue.length === 0)
	{
		completeCallback();
		return;
	}
	
	for (var i = 0; i < this.downloadQueue.length; i++)
	{
		var path = this.downloadQueue[i];
		var img = new Image();
		var that = this;

		img.addEventListener("load", function()
		{
			that.successCount += 1;
			if (that.IsComplete())
			{
				completeCallback();
			}
		}, false);

		img.addEventListener("error", function()
		{
			that.errorCount += 1;
			if (that.IsComplete())
			{
				completeCallback();
			}
		}, false);

		img.src = path;
		this.assetCache[path] = img;
	}
}

AssetManager.prototype.IsComplete = function()
{
	return (this.downloadQueue.length == this.successCount + this.errorCount);
}

AssetManager.prototype.GetAsset = function(path)
{
	return this.assetCache[path];
}