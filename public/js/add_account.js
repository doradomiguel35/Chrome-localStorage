let json_accounts = [];
							
function createUser(){

	let name = document.querySelector('#name').value;
	let email = document.querySelector('#email').value;
	let username = document.querySelector('#username').value;
	let password = document.querySelector('#password').value;
	let confirm = document.querySelector('#confirm').value;
	let newAccount = {
		name: name,
		email: email,
		username: username,
		password: password,
		confirm: confirm
	}
	json_accounts.push(newAccount);

	console.log(json_accounts);
	let jns = JSON.stringify(json_accounts);
	localStorage.setItem('json_accounts',jns);

	let jns_retrieve = localStorage.getItem('json_accounts');
	console.log(jns_retrieve);

	let jns_parse = JSON.parse(localStorage.getItem('json_accounts'));
	console.log(jns_parse);

	//Display in console inside of json array
	console.log("Name is " + jns_parse[0].name);
	console.log("Email is " + jns_parse[0].email);

}