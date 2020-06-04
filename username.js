const fetch = require("node-fetch");

module.exports = () => {
	let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	
	function randomChar() {
		if (randomNum(2) == 1) {
			return randomNum(9);
		}
		else {
			let letter = alphabets[Math.floor(Math.random() * alphabets.length)];
			if (randomNum(2) == 2) {
				return letter.toUpperCase();
			}
			else {
				return letter;
			};
		};
	};
	
	function randomNum(highest) {
		return Math.floor(Math.random() * highest) + 1;
	};
	
	function run() {
		let len = randomNum(10);
		let username = "";
		for (var i = 1; i <= len; i++) {
			username += randomChar();
		};
		username == username + "#" + randomNum(9)  + randomNum(9)  + randomNum(9)  + randomNum(9);
		return username;
	};
	
	return run();
};