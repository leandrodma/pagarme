require('dotenv').config({ path: process.env.NODE_ENV ===  'test' ? './env.test' : './env'})

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  storage: "./database/database.sqlite",
  operatorsAliases: false,
  define: {
    timestamps: true,
  }
}
