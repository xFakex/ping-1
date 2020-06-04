const fetch = require("node-fetch");
const fs = require("fs");
const config = require("./config.json");

const modules = [];
const messageModules = {};

fs.readdir("./modules/", (err, files) => {
	let jsfile = files.filter(f => f.split(".").pop() === "js");
	jsfile.forEach((f, i) => {
		messageModules[f] = {name:f, func:require(`./modules/${f}`)};
		modules.push(f);
	});
});

function getUsername() {
	let username = require("./username.js")();
	return username;
};

function getMessage() {
	let selected = modules[Math.floor(Math.random() * modules.length)];
	return messageModules[selected].func();
};

function send(url) {
	let contents = {
		"username": getUsername(),
		"content": "@everyone, " + getMessage()
	};
	fetch(url, {"method":"POST", "headers":{"content-type":"application/json"}, "body":JSON.stringify(contents)});
};
setInterval(
	function() {
		for (var i = 1; i <= 11; i++) {
			send(config[i]);
		};
	}, config.wait
);
