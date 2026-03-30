const express = require("express");
const router = express.Router();
const authRequired = require("../middleware/auth.middleware");
const userController = require("../controllers/user.controller");

router.get("/", authRequired, userController.getAllUsers);
router.get("/:id", authRequired, userController.getUserById);
router.post("/", authRequired, userController.createUser);
router.put("/:id", authRequired, userController.updateUser);
router.delete("/:id", authRequired, userController.deleteUser);

module.exports = router;
