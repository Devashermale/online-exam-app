const express = require("express");
const router = express.Router();
const { createuser, getAllUsers, getUserById, loginuser } =require("../controller/usermodel");

router.post("/users", createuser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post('/login',loginuser)

module.exports = router;