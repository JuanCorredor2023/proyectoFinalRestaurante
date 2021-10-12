const { Router } = require('express');
const router = Router();

const usersControllers = require("../controllers/user.controllers");

router.post('/signup', usersControllers.signup)
router.post('/signin', usersControllers.signin)
router.put("/updateUser/:id_user", usersControllers.updateUser)
router.get("/getAllUser", usersControllers.getAllUsers)
router.delete("/deleteUser/:id_user", usersControllers.deleteUser)


module.exports = router;