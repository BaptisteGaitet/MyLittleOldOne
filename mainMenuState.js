function MainMenuState()
{
	this.background = new RectangleShape(0,0,screenWidth,screenHeight,"#b000ff");
	this.title = new Label("My Little Old One", "60px Lucida Console", 400, 100, "center", "#e0e0e0");
	this.punchline = new Label("The Cosmos seems empty right now:", "20px Lucida Console", 400, 200, "center", "#e0e0e0");
	this.startButton = new Button("Chant", "40px Lucida Console", 300, 300, 200, 100, "#e0e0e0", "#505050", "#101010", "#a0a0a0");
	this.disclaimer = new Label("This so-called \"game\" requires cookies to work, sorry ^^\"", "14px Lucida Console", 400, 550, "center", "#e0e0e0");
}

MainMenuState.prototype.init = function()
{

}

MainMenuState.prototype.update = function()
{

}

MainMenuState.prototype.newGame = function()
{
	return this.startButton.isClicked();
}

MainMenuState.prototype.resize = function()
{
	this.background.setWidth(screenWidth);
	this.background.setHeight(screenHeight);

	this.title.setLeft(getScreenCenter().x);
	this.title.setTop(getScreenCenter().y - 4*(screenHeight / 16));

	this.punchline.setLeft(getScreenCenter().x);
	this.punchline.setTop(getScreenCenter().y);

	this.startButton.setLeft(getScreenCenter().x - this.startButton.getWidth() / 2);
	this.startButton.setTop((getScreenCenter().y + (screenHeight / 16)));

	this.disclaimer.setLeft(getScreenCenter().x);
	this.disclaimer.setTop(getScreenCenter().y + 6*(screenHeight / 16));
}

MainMenuState.prototype.draw = function()
{
	this.background.draw();
	this.title.draw();
	this.punchline.draw();
	this.startButton.draw();
	this.disclaimer.draw();
}