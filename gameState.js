function GameState()
{
	this.oldOne = new OldOne();
	this.background = new RectangleShape(0,0,800,600,"#9090f0");
	this.nameLabel = new Label(this.oldOne.getName().toString(), "20px Lucida Console", 100,50,"center", "#e0e0e0");
	this.healthLabel = new Label(Math.floor(this.oldOne.getHealth()).toString(), "20px Lucida Console", 100, 100, "center", "#e0e0e0");
	this.ageLabel = new Label("", "12px Lucida Console", 100, 150, "center", "#e0e0e0");
}

GameState.prototype.init = function()
{
	this.oldOne.load();
	this.nameLabel.setText(this.oldOne.getName());
}

GameState.prototype.returnToMenu = function()
{
	return this.oldOne.isDead();
}

GameState.prototype.createNewOldOne = function()
{
	this.oldOne = new OldOne();
	this.oldOne.setName(getRandomName(2,2));
	this.oldOne.setHealth(10);
	this.oldOne.setBirthDate(new Date());
	this.oldOne.save();

	this.healthLabel.setText(Math.floor(this.oldOne.getHealth()).toString());
	this.nameLabel.setText(this.oldOne.getName());
}

GameState.prototype.update = function()
{
	this.oldOne.update();

	this.healthLabel.setText(Math.floor(this.oldOne.getHealth()).toString());

	this.ageLabel.setText(this.oldOne.getAgeString());
}

GameState.prototype.draw = function()
{
	this.background.draw();
	this.nameLabel.draw();
	this.healthLabel.draw();
	this.ageLabel.draw();
}