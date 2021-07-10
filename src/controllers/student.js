const Student = require("../models/student");

//POST student
const newstudent = (req, res) => {
  //check if student already exists in db
  Student.findOne({ name: req.body.nome }, (data) => {
    //if student not in db, add it
    if (data === null) {
      const newstudent = new student({
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
      });

      // save to database
      newstudent.save((err, data) => {
        if (err) return res.json("Something is wrong. Please check.");
        return res.json(data);
      });
    } else {
      return res.json(`${nome} student already exists.`);
    }
  });
};

//GET all students
const getAllstudent = (req, res) => {
  student.find({}, (err, data) => {
    if (err) {
      return res.json("Something is wrong. Please contact admin.");
    }
    return res.json(data);
  });
};

//DELETE students
const delestudentllstudent = (req, res) => {
  student.deleteMany({}, (err) => {
    if (err) {
      return res.json("Something's wrong. Deletion failed.");
    }
    return res.json("All student are deleted successfully... ");
  });
};

//GET 1 student
const getOnestudent = (req, res) => {
  let name = req.params.name;
  student.findOne({ name: name }, (err, data) => {
    if (err || !data) {
      return res.json(`Cannot find the ${name} student...`);
    } else return res.json(data);
  });
};

//POST 1 student comment
const newComment = (req, res) => {
  let name = req.params.name;
  let newComment = req.body.comment;

  const comment = {
    text: newComment,
    date: new Date(),
  };

  //find the student object
  student.findOne({ name: name }, (err, data) => {
    if (err || !data || !newComment) {
      return res.json(`Comment fail. ${name} student doesn't exist.`);
    } else {
      //add to comments array of the student object
      data.comments.push(comment);

      //save changes to db
      data.save((err) => {
        if (err) {
          return res.json("Something's wrong. Please contact admin.");
        }
        return res.json(data);
      });
    }
  });
};

//DELETE 1 student
const deleteOnestudent = (req, res) => {
  let name = req.params.name;
  student.deleteOne({ name: name }, (err, data) => {
    if (err || !data) {
      return res.json(`${name} student doesn't exist in the first place.`);
    } else return res.json(`Goodbye. ${name} student is deleted.`);
  });
};

//export controller
module.exports = {
  getAllstudent,
  newstudent,
  delestudentllstudent,
  getOnestudent,
  newComment,
  deleteOnestudent
  
};
