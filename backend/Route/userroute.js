const express = require("express");
const router = express.Router();
const { createuser, getAllUsers, getUserById, updateUser, deleteUser } = require("../controller/usermodel");

router.post("/users", createuser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;