function Button(_text, _font, _left, _top, _width, _height, _textColor, _idleColor, _hoverColor, _clicColor)
{
	this.left = _left;
	this.top = _top;
	this.width = _width;
	this.height = _height;
	this.label = new Label(_text, _font, _left + (_width / 2), _top + (_height / 2), "center", _textColor);
	this.idleRect = new RectangleShape(_left, _top, _width, _height, _idleColor);;
	this.hoverRect = new RectangleShape(_left, _top, _width, _height, _hoverColor);
	this.clicRect = new RectangleShape(_left, _top, _width, _height, _clicColor);;
}

Button.prototype.setText = function(_text)
{
	this.label = this.label.setText(_text);
}

Button.prototype.getText = function()
{
	return this.label.getText();
}

Button.prototype.setFont = function(_font)
{
	this.label = this.label.setFont(_font);
}

Button.prototype.getFont = function()
{
	return this.label.getFont();
}

Button.prototype.setLeft = function(_left)
{
	this.left = _left;
	this.label.setLeft(_left);
	this.idleRect.setLeft(_left);
	this.overRect.setLeft(_left);
	this.clicRect.setLeft(_left);
}

Button.prototype.getLeft = function()
{
	return this.left;
}

Button.prototype.setTop = function(_top)
{
	this.top = _top;
	this.label.setTop(_top);
	this.idleRect.setTop(_top);
	this.overRect.setTop(_top);
	this.clicRect.setTop(_top);
}

Button.prototype.getTop = function()
{
	return this.top;
}

Button.prototype.setWidth = function(_width)
{
	this.width = _width;
	this.idleRect.setWidth(_width);
	this.overRect.setWidth(_width);
	this.clicRect.setWidth(_width);
}

Button.prototype.getWidth = function()
{
	return this.width;
}

Button.prototype.setHeight = function(_height)
{
	this.height = _height;
	this.idleRect.setHeight(_height);
	this.overRect.setHeight(_height);
	this.clicRect.setHeight(_height);
}

Button.prototype.getHeight = function()
{
	return this.height;
}

Button.prototype.setTextColor = function(_textColor)
{
	this.label.setColor(_textColor);
}

Button.prototype.getTextColor = function()
{
	return this.label.getColor();
}

Button.prototype.setIdleColor = function(_idleColor)
{
	this.idleRect.setColor(_idleColor);
}

Button.prototype.getIdleColor = function()
{
	return this.idleRect.getColor();
}

Button.prototype.setHoverColor = function(_hoverColor)
{
	this.hoverRect.setColor(_hoverColor);
}

Button.prototype.getHoverColor = function()
{
	return this.hoverRect.getColor();
}

Button.prototype.setClicColor = function(_clicColor)
{
	this.clicRect.setColor(_clicColor);
}

Button.prototype.getclicColor = function()
{
	return this.clicRect.getColor();
}

Button.prototype.draw = function()
{
	if(mouseX >= this.left && mouseX <= (this.left + this.width) && mouseY >= this.top && mouseY <= (this.top + this.height))
	{
		if(mouseDown)
		{
			this.clicRect.draw();
		}
		else
		{
			this.hoverRect.draw();
		}
	}
	else
	{
		this.idleRect.draw();
	}

	this.label.draw();
}

Button.prototype.isClicked = function()
{
	var res = false;

	if(mouseX >= this.left && mouseX <= (this.left + this.width) && mouseY >= this.top && mouseY <= (this.top + this.height) && mouseClic)
	{
		res = true;
	}

	return res;
}