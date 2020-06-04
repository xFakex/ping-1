const fetch = require("node-fetch");

module.exports = () => {
	let chance = Math.floor(Math.random() * 9);
	let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	let messages = [
		"this message was generated.",
		"if you're reading this, I hope you are having a nice day.",
		"oofnah was definitely not here.",
		"praise idontthinkofacool and oofnah."
	];
	let n1 = Math.floor(Math.random() * 100);
	let n2 = Math.floor(Math.random() * 100);
	function randomChar() {
		if (Math.floor(Math.random() * 3) == 1) {
			return (Math.floor(Math.random() * 10));
		}
		else {
			let letter = alphabets[Math.floor(Math.random() * alphabets.length)];
			if (Math.floor(Math.random() * 3) == 2) {
				return letter.toUpperCase();
			}
			else {
				return letter;
			};
		};
	};
	if (chance == 1) {
		return messages[Math.floor(Math.random() * messages.length)];
	}
	else if (chance == 2) {
		return "always remember " + n1 + " + " +  n2 + " = " + (n1 + n2) + ".";
	}
	else if (chance == 3) {
		return "always remember " + n1 + " - " +  n2 + " = " + (n1 - n2) + ".";
	}
	else if (chance == 4) {
		return "always remember " + n1 + " * " +  n2 + " = " + (n1 * n2) + ".";
	}
	else if (chance == 5) {
		let len = Math.floor(Math.random() * 25);
		let m = "";
		for (var i = 1; i <= len; i++) {
			m += randomChar();
		};
		return m;
	}
	else if (chance == 6) {
		return "always remember " + n1 + " / " +  n2 + " = " + (n1 / n2) + ".";
	}
	else if (chance == 7) {
		return "always remember " + n1 + " % " +  n2 + " = " + (n1 % n2) + ".";
	}
	else if (chance == 8) {
		fetch("https://icanhazdadjoke.com/slack").then(res => res.text()).then(body => {
			body = JSON.parse(body, "utf8");
			return body.attachments[0].fallback;
		});
	}
	else {
		return "Nothing.";
	};
};