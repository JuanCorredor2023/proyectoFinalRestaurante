const express = require("express")
const router = express.Router()

//constroladores
const MenusControllers = require("../controllers/menuControllers")
console.log(MenusControllers)

router.post("/createMenu", MenusControllers.createMenu)
router.put("/updateMenu/:id_user", MenusControllers.updateMenu)
router.get("/getAllMenus", MenusControllers.getAllMenus)
router.get("/getMenuById/:id_user", MenusControllers.getMenuById)
router.delete("/deleteMenu/:id_user", MenusControllers.deleteMenu)
router.post("/sendEmail", MenusControllers.sendEmail)

module.exports = router