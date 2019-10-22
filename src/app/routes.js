const routes = require("express").Router();

routes.get('/healthcheck', function (req, res, next) {
	res.json({status: 'UP'});
});

routes.post('/clients/:id/checkout', (req, res, next) => {
	res.sendStatus(200)
});

module.exports = routes;
