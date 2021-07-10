const express = require("express");
const routes = require("./src/routes/student");
const mongoose = require("mongoose");
const cors = require("cors");

//app
require("dotenv").config();
const db = require("./src/data/database")
db.connect()

const app = express();

app.use(cors())
app.use(express.json()); //parses incoming requests as JSON
app.use("/", routes);


//Index page (static HTML)
app.get("/",function (req, res) {
  res.sendFile( __dirname + 'src/index.html');
});

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
