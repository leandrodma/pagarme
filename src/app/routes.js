const {clientController} = require('../app/controllers')

const routes = require("express").Router();

routes.get('/healthcheck', function (req, res, next) {
	res.json({status: 'UP'});
});

routes.post('/clients/:clientID/checkout', clientController);

module.exports = routes;

