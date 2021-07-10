// connection to database
require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI; 

const connect = () => {
   mongoose.connect(MONGO_URI, {
         useNewUrlParser: true,
         useFindAndModify: false,
         useUnifiedTopology: true,
         useCreateIndex: true
      })
      .then(() => {
         console.log("A API ComunicAção está conectada ao Mongo Atlas")
      })
      .catch((error) => {
         console.log("Aconteceu algo errado com a API ComunicAção, por favor, verificar com o Back-end")
         console.error(error)
      });
};

module.exports = { connect };