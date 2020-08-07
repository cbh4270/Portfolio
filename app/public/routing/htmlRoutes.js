var path = require("path");

module.exports = function(app) {
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "../index.html"));
	});

	// fallback use route for homepage
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../index.html"));
	});
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../index.html"));
	});


};