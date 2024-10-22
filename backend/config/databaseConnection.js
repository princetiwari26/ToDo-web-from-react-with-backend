const mongoose = require('mongoose')

const DatabaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected successfully");
  } catch (error) {
    console.log("MongoDB is not Connected", error);
  }
};

module.exports = DatabaseConnection;