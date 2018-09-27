var db = require('../models');

module.exports = app => {
	app.get('/api/rolls', (req, res) => {
		db['Rolls'].findAll({
			order: [
				['id', 'DESC'],
			],
		}).then(dbRoll => {
			res.json(dbRoll);
		});
	});

	app.post('/api/rolls', (req, res) => {
		db['Rolls'].create({
			roll: req['body']['roll'],
			number: req['body']['number'],
			time: req['body']['time'],
			username: req['body']['username']
		}).then(dbRoll => {
			res.json(dbRoll);
		});
	});

	app.delete('/api/clear', (req, res) => {
		db['Rolls'].destroy({
			where: {}
		}).then(dbRoll => {
			res.json(dbRoll);
		});
	});
};