

const result = require("../model/ResultSchema");

//create a new result
const createResult = async (req, res) => {
    try {
        const newResult = new result(req.body);
        const savedResult = await newResult.save();
        res.status(201).json(savedResult);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//get all results
const getResults = async (req, res) => {
    try {
        const results = await result.find();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get result by id
const getResultById = async (req, res) => {
    try {
        const resultById = await result.findById(req.params.id);
        if (!resultById) {
            return res.status(404).json({ message: "Result not found" });
        }
        res.status(200).json(resultById);
    }   catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//update result by id
const updateResult = async (req, res) => {
    try {
        const updatedResult = await result.findByIdAndUpdate(req
.params.id, req.body, { new: true });
        if (!updatedResult) {
            return res.status(404).json({ message: "Result not found" });
        }
        res.status(200).json(updatedResult);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//delete result by id
const deleteResult = async (req, res) => {
    try {
        const deletedResult = await result.findByIdAndDelete(req.params.id);
        if (!deletedResult) {
            return res.status(404).json({ message: "Result not found" });
        }
        res.status(200).json({ message: "Result deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

    module.exports = { 
        createResult, 
        getResults,
         getResultById, 
         updateResult,
          deleteResult 
        };