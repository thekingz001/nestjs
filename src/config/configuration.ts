export default () => ({
    PORT: parseInt(process.env.PORT, 10) || 4321,
    MONGO_URL: process.env.MONGO_URL
  });