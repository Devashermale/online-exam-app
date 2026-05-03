const express = require("express");
const router = express.Router();
const {getExams , createExam , getExamById , deleteExam ,updateExam} = require("../controller/Examcontroller");
const auth = require('../middleware/Auth.js') 

router.use(auth); 
router.post("/exams", createExam);
router.get("/exams", getExams);
router.get("/exams/:id", getExamById);

module.exports = router;
