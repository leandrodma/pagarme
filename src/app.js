const koa = require('koa')

class PSP{
  constructor() {
    this.koa = new koa()

    this.routes()
  }

  routes() {
    this.koa.use(require("./routes"));
  }
}


module.exports = new PSP().koa