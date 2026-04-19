const Exam = require("../model/examSchema");

// Create a new exam
exports.createExam = async (req, res) => {
    try {
        const exam = new Exam(req.body);
        await exam.save();
        res.status(201).json(exam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all exams
exports.getExams = async (req, res) => {
    try {
        const exams = await Exam.find();
        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single exam by ID
exports.getExamById = async (req, res) => {
    try {
        const exam = await Exam.findById(req.params.id);
        if (!exam) {
            return res.status(404).json({ message: "Exam not found" });
        }
        res.status(200).json(exam);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an exam by ID
exports.updateExam = async (req, res) => {
    try {
        const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!exam) {
            return res.status(404).json({ message: "Exam not found" });
        }   
        res.status(200).json(exam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
};

// Delete an exam by ID
exports.deleteExam = async (req, res) => {
    try {
        const exam = await Exam.findByIdAndDelete(req.params.id);
        if (!exam) {
            return res.status(404).json({ message: "Exam not found" });
        }
        res.status(200).json({ message: "Exam deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
};

 