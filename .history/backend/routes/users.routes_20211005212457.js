const express = require("express")
const router = express.Router()

//constroladores
const MenusControllers = require("../controllers/usersController")
console.log(MenusControllers)

router.post("/createMenu", MenusControllers.createMenu)
router.put("/updateMenu/:id_user", MenusControllers.updateMenu)
router.get("/getAllMenus", MenusControllers.getAllMenus)
router.get("/getMenuById/:id_user", MenusControllers.getMenuById)
router.delete("/deleteMenu/:id_user", MenusControllers.deleteMenu)
//advanced task
router.get("/getAllMichaels", MenusControllers.getAllMichaels)

module.exports = router