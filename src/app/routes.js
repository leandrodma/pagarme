const routes = require("express").Router();

routes.get('/healthcheck', function (req, res, next) {
	res.json({status: 'UP'});
});

module.exports = routes;
