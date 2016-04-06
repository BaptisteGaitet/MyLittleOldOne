var sndHover = new Audio("snd/hover.mp3");
var sndConfirm = new Audio("snd/confirm.mp3");

function play(_id)
{
	if(_id == "hover")
	{
		sndHover.play();
	}else if(_id == "confirm")
	{
		sndConfirm.play();
	}
}