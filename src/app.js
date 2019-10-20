const koa = require('koa')

class PSP{
  constructor() {
    this.koa = koa()
  }
}


module.exports = new PSP()