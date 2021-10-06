const express = require("express")
const router = express.Router()

//constroladores
const UsersControllers = require("../controllers/usersController")
console.log(UsersControllers)

router.post("/createUser", UsersControllers.createUser)
router.put("/updateUser/:id_user", UsersControllers.updateUser)
router.get("/getAllUsers", UsersControllers.getAllUsers)
router.get("/getUserById/:id_user", UsersControllers.getUserById)
router.delete("/deleteUser/:id_user", UsersControllers.deleteUser)
//advanced task
router.get("/getAllMichaels", UsersControllers.getAllMichaels)

module.exports = router