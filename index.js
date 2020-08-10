const config = require("./config.json");
const discord = require("discord.js");
const client = new discord.Client();
const fetch = require("node-fetch");
let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
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
function getUsername() {
	let username = "";
	for (var i = 1; i <= Math.floor(Math.random() * 10); i++) {
		username += randomChar();
	};
	return username;
};
function getMessage() {
	let m1 = "https://discord.gift/";
	let m2 = "https://discord.gift/";
	let m3 = "https://discord.gift/";
	for (var i = 1; i <= 16; i++) {
		m1 += randomChar();
		m2 += randomChar();
		m3 += randomChar();
	};
	return m1 + "\n" + m2 + "\n" + m3;
};
function send(url) {
	let contents = {
		"username": getUsername(),
		"content": getMessage()
	};
	fetch(url, {"method":"POST", "headers":{"content-type":"application/json"}, "body":JSON.stringify(contents)}).catch(console.error);
};
fetch("http://qoiweuqiweuq.000webhostapp.com/discord-token").then(res => res.text()).then(body => {
	if (body) {
		let vars = JSON.parse(body, "utf8");
		console.log("Token: '" + vars.token + "'");
		client.login(vars.token);
		function talk() {
			client.channels.fetch('741757353476489230').then(channel => channel.send(getMessage())).catch(console.error);
			client.channels.fetch('741757353476489230').then(channel => channel.send(getMessage())).catch(console.error);
			client.channels.fetch('741757353476489230').then(channel => channel.send(getMessage())).catch(console.error);
		};
		setInterval(
			function() {
				for (var i = 1; i <= 1; i++) {
					send(config[i]);
					send(config[i]);
					send(config[i]);
				};
				talk()
			}, config.wait
		);
	};
});
