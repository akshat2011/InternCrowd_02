const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = loginForm.username.value;
	const password = loginForm.password.value;
	// Do something with username and password
	loginForm.reset();
});

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = signupForm.name.value;
	const email = signupForm.email.value;
	const password = signupForm.password.value;
	// Do something with name, email, and password
	signupForm.reset();
});
loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = loginForm.username.value;
	const password = loginForm.password.value;
	// Do something with username and password
	loginForm.reset();
	alert("Login Successful!"); // Display alert message
});

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = signupForm.name.value;
	const email = signupForm.email.value;
	const password = signupForm.password.value;
	// Do something with name, email, and password
	signupForm.reset();
	alert("Sign Up Successful!"); // Display alert message
});