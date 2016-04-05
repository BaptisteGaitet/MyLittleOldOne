function CircleShape(_left, _top, _radius, _color)
{
	this.left = _left;
	this.top = _top;
	this.radius = _radius;
	this.color = _color;
}

CircleShape.prototype.setLeft = function(_left)
{
	this.left = _left;
}

CircleShape.prototype.getLeft = function()
{
	return this.left;
}

CircleShape.prototype.setTop = function(_top)
{
	this.top = _top;
}

CircleShape.prototype.getTop = function()
{
	return this.top;
}

CircleShape.prototype.setRadius = function(_radius)
{
	this.radius = _radius;
}

CircleShape.prototype.getRadius = function()
{
	return this.radius;
}

CircleShape.prototype.setColor = function(_color)
{
	this.color = _color;
}

CircleShape.prototype.getColor = function()
{
	return this.color;
}

CircleShape.prototype.draw = function()
{
	var canvas = document.getElementById("game");
	var context = canvas.getContext("2d");

	context.fillColor(_color);
	context.drawCircle(this.left, this.top, this.radius);

	context.beginPath();
    context.arc(this.left, this.top, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
}