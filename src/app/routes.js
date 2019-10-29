const transactionController = require('../app/controllers/transactionController')
const payableController 		= require('../app/controllers/payableController')

const routes = require("express").Router();

routes.get('/healthcheck', function (req, res, next) {
	res.json({status: 'UP'});
});

routes.post('/clients/:clientID/checkout', 		transactionController.create);
routes.get('/clients/:clientID/transactions', transactionController.index);

routes.post('/payables/', payableController.pay);

module.exports = routes;

