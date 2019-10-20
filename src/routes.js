const Router = require('koa-router');

const routes = new Router();

routes.get('/', ctx => {
  ctx.body = '<p>Exibe documentação do projeto</p>';
});

routes.allowedMethods()

module.exports = routes.routes();
