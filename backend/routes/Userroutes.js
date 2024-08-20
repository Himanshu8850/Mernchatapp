const express = require("express");
const { registeruser, authUser } = require("../controllers/Usercontroller");
const router = express.Router();
const { allUsers } = require("../controllers/Usercontroller");
const { protect } = require("../middlewares/authMiddleware");
router.route("/").post(registeruser).get(protect, allUsers);
router.post("/login", authUser);
module.exports = router;
