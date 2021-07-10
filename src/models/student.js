const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
   
    nome: {type: String,required: true},
    sobrenome: {type: String, required: true },
    nascimento: {type: Number,required: true},
    responsavelUm: {type: String, required: true },
    responsavelDois: { type: String, required: true},
    endereco: {type: String, required: true },
    telefone: {type: Number, required: true },
    matricula: {type: Number,required: true },
    turno: {type: String,required: true},
    curso: {type: String,required: true},
    serie: {type: Number, required: true},
    turma: {type: String,required: true},      
    comments: [{ text: String, Date: {type:String, default: new Date()} }]
});
  
    
module.exports = mongoose.model('student', studentSchema);





/*
{
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        nascimento: req.body.nascimento,
        responsavelUm: req.body.responsavelUm,
        responsavelDois: req.body.responsavelDois,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        matricula: req.body.matricula,
        turno: req.body.turno,
        curso: req.body.curso,
        serie: req.body.serie,
        turma: req.body.turma
        comments: []
}
*/