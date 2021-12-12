const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_URL}/health-care?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("database connection success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

//ssssssssssssssssssssssdasd
