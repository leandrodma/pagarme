const koa = require('express')

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