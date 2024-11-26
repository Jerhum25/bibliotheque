const mongoose = require("mongoose");
require ('dotenv').config();
// console.log(process.env)

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://username:password25000@bibliotheque.n1l8m.mongodb.net/?retryWrites=true&w=majority&appName=Bibliotheque`,
      // process.env.MONGODB_CONNECT
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("erreur", err.message);
    process.exit(1); // Quitter le processus en cas d’erreur
  }
};

module.exports = connectDB;
