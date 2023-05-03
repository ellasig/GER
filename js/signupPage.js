// what is currently shown on the sign up screen
// position 0 = login and sign up buttons
// position 1 = login form
// position 2 = sign up form
// position 3 = profile
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
async function showProfile(){
	// const loggedIn = sessionStorage.getItem("loggedIn") === "true";
	const accessToken = sessionStorage.getItem("loginToken");
	const isLogged = await fetch("/authenticateUser", {
		method: "GET",
		body: JSON.stringify({
			accessToken: accessToken,
		})
	});
	if (isLogged.text!==undefined) {
		document.getElementById("login").style.display = "none";
		document.getElementById("signup").style.display = "none";
		document.getElementById("loggedIn").style.display = "flex";
		position = 3;
	}else{
		document.getElementById("loggedIn").style.display = "none";
		document.getElementById("buttons").style.display = "flex";
		position = 0;
	}
}
function signUp() {
	const url = "/app/addUser";
	let photoInput = document.querySelector("photo-file");
	let formData = new FormData();
	console.log(photoInput);
	formData.append("username", document.getElementsByName("username")[1].value);
	formData.append("email", document.getElementsByName("email")[0].value);
	formData.append("pass", document.getElementsByName("password")[0].value);
	formData.append("image", photoInput.files[0]);


	fetch(url, {
			method: "POST",
			body: formData
			}).then(r => {
					return r.json()
			}).then(r => {
					alert(r);
	});

}

/* Sends a HTTP request to log in, server returns a JWT token that is stored on
local storage */
function loginUser() {
	if (validate()) {
		const url = "/app/loginUser";
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



