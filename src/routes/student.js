const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student");

router.get("/student", studentController.getAllstudent);
router.post("/student", studentController.newstudent);
router.delete("/student", studentController.delestudentllstudent);

router.get("/student/:name", studentController.getOnestudent);
router.post("/student/:name", studentController.newComment);
router.delete("/student/:name",studentController.deleteOnestudent);


module.exports = router

