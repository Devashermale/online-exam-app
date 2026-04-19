const express = require("express");
const router = express.Router();
const {createExam, getExams, getExamById, updateExam, deleteExam} = require("../controller/Examcontroller");


router.post("/exams", createExam);
router.get("/exams", getExams);
router.get("/exams/:id", getExamById);
router.put("/exams/:id", updateExam);
router.delete("/exams/:id", deleteExam);

module.exports = router;
