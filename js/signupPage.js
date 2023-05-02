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


/* Sends a HTTP request to log in, server returns a JWT token that is stored on
local storage */
function loginUser() {
	if (validate()) {
		const url = "/loginUser";
    fetch(url, {
      method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
      body: JSON.stringify({
        username: document.getElementById("loginUsername").value,
        pass: document.getElementById("loginPassword").value
      })
    })
		.then(res => {return res.json()})
        .then((res) => {
					console.log(res)
          localStorage.setItem('loginToken', res.accessToken);
    })
        .catch(err => {
          console.error(err);
    });
	}
}

// TODO validate user input
function validate() {
	return true;
}
