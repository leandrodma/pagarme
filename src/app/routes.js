const transactionController = require('../app/controllers/transactionController')

const routes = require("express").Router();

routes.get('/healthcheck', function (req, res, next) {
	res.json({status: 'UP'});
});

routes.get('/clients/:clientID/transactions', transactionController.index);
routes.post('/clients/:clientID/checkout', 		transactionController.create);

module.exports = routes;

