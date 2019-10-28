require('dotenv').config({  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"})

const express = require('express')
class PSP{
  constructor() {
    this.express = new express()

    this.express.use(express.json());

    this.routes()
  }

  routes() {
    this.express.use(require("./routes"));
  }
}


module.exports = new PSP().express