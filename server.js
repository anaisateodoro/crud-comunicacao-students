const express = require("express");
const routes = require("./src/routes/student");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

//app
require("dotenv").config();
const db = require("./src/data/database");
const { options } = require("./src/routes/student");
db.connect()

const app = express();

app.use(cors())
app.use(express.json()); //parses incoming requests as JSON
app.use("/", routes);


//Index page (static HTML)
const optionsPublic = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html', "js", "css","jpg","png"],   
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
app.use("/public",express.static(path.join(__dirname,"./public"),optionsPublic))



// message to welvome
let data =new Date();
let hora = data.getHours();
let min =data.getMinutes();
let saudacao;
if(hora<=11){
    saudacao = 'Bom dia!';
} else if (hora<=17){
    saudacao = 'Boa tarde!';
   }   else {
        saudacao = 'Boa noite!';
    }

console.log('Olá! ' + saudacao);
console.log('Agora são ' + hora + ' horas e ' + min +' minutos.');

const PORT = process.env.PORT ||8080

app.listen(PORT, ()=>{
    console.log(`Bem-vindes! Rodando a API ComunicAção na porta ${PORT}`)
})
