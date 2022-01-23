document.getElementById('botbutton').addEventListener("click", function() {
	document.querySelector('.botcont').style.display = "flex";
	document.querySelector('.bothead').style.display = "flex";
	document.querySelector('.bot-button').style.display = "none";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.botcont').style.display = "none";
	document.querySelector('.bothead').style.display = "none";
	document.querySelector('.bot-button').style.display = "flex";
});