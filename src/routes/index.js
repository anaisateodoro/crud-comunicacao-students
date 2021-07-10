const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "API ComunicAção",
        "version": "1.0.0",
        "mensagem": "API ComunicAção - Deploy no Heroku com Node.js e integração com MongoDb"
    })
})
module.exports = router