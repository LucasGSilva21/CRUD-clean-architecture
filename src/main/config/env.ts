export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/crud-clean-architecture',
  port: process.env.PORT ?? 3333
}
