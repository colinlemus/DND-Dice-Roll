var db = require('../models');
var path = require('path');

module.exports = app => {
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../', 'my-app', 'build', 'index.html'));
	});
};