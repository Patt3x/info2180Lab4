var lose = false;
var win = false;

window.onload = function()
{
	$("start").onmouseover = beGin;
	$("start").onclick = reset;

	//$("start").onclick = reset;
};

function beGin()
{

	$("start").onclick = reset;
	if(win)
	{
		$("maze").onmouseleave = turnRed;
	}
	

	$("end").onmouseover = winning;
	game();
}	

function game()
{

	var boundary = $$("div#maze div.boundary");		
	for(var i = 0; i < boundary.length; i++)
	{
		boundary[i].onmouseover = turnRed;
	}
}

function turnRed()
{
	//lose = true;
	var boundary = $$("div#maze div.boundary");
	for(var i = 0; i < boundary.length; i++)
	{
		boundary[i].addClassName("youlose");
	}
	$("status").textContent = "You lost";
	
}

function reset()
{
	//lose = false;
	$("status").textContent = "Click the 'S' to begin.";
	var boundary = $$("div#maze div.boundary");
	for(var i = 0; i < boundary.length; i++)
	{
		boundary[i].removeClassName("youlose");
	}
	//lose = true;
}

function winning()
{

		$("status").textContent = "You won";
		win = true;
		//$("start").onmouseover = beGin;
}