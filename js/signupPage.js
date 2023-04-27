// what is currently shown on the sign up screen
// position 0 = login and sign up buttons
// position 1 = login form
// position 2 = sign up form
let position = 0;

function showLogin(){
	document.getElementById("login").style.display = "flex";
	document.getElementById("buttons").style.display = "none";
	position = 1;
}
function showSignup(){
	document.getElementById("signup").style.display = "flex";
	document.getElementById("buttons").style.display = "none";
	position = 2;
}
function showButtons(){
	if (position === 1){
		document.getElementById("login").style.display = "none";
		document.getElementById("buttons").style.display = "flex";
		position = 0;
	} else if (position === 2){
		document.getElementById("signup").style.display = "none";
		document.getElementById("buttons").style.display = "flex";
		position = 0;
	}
}