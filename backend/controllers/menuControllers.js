const { find } = require("../models/Menu")
const Menu = require("../models/Menu")
const menuController = {}

menuController.createMenu = async (req, res) => {

    try{
        const { name, description, file, type } = req.body

        const usernameExists = await Menu.findOne({name})

        if(usernameExists){
            res.status(400).json({message: "Usuario ya existe"})
        } else {
            const newMenu = new Menu({name, description, file, type})

            await newMenu.save()

            res.status(201).json({message: "Usuario Creado", newMenu})
        }
    } catch (error){
        console.log(error)
        res.status(400).json({message: "Error al crear el usuario", error})
    }
}

menuController.updateMenu = async (req, res) => {

    try{
        const idMenu = req.params.id_user

        const updatedMenu = await Menu.findByIdAndUpdate(idMenu, req.body, {new: true})

        if(updatedMenu) res.status(201).json({message: "Usuario Actualizado", updatedMenu})
        else res.status(202).json({message: "El usuario no existe"})
    } catch (error){
        console.log(error)
        res.status(400).json({error})
    }
}

menuController.getAllMenus = async (req, res) => {
    try {
        const menu = await Menu.find()

        if(menu) res.status(200).json(menu)
        else res.status(202).json({message: "menu not found"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

menuController.getMenuById = async (req, res) => {
    try {
        const user = await Menu.findById(req.params.id_user)

        if(user) res.status(200).json({message: "user found", user})
        else res.status(202).json({message: "user not found"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

menuController.deleteMenu = async (req, res) => {
    try {
        const deleted = await Menu.findByIdAndDelete(req.params.id_user)

        res.status(202).json({message: "user deleted"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

module.exports = menuController