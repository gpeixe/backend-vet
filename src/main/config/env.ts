export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/backend-tc2',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj6we4==5'
}
