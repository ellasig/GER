let isShown = false;

function showDiv() {
	if (isShown === false) {
		document.getElementById("menu").style.display = "flex";
		document.getElementById("main").style.display = "none";
		isShown = true;
	} else if (isShown === true) {
		document.getElementById("menu").style.display = "none";
		document.getElementById("main").style.display = "block";
		isShown = false;
	}
}
