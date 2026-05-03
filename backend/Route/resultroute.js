const express = require("express");
const {createResult, getResults, getResultById, updateResult, deleteResult} = require("../controller/resultcontroller");
const router = express.Router();

router.post("/results", createResult);
router.get("/results", getResults);
router.get("/results/:id", getResultById);
router.put("/results/:id", updateResult);
router.delete("/results/:id", deleteResult);

module.exports = router;
