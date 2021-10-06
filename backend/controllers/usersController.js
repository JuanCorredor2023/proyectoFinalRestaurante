const { find } = require("../models/User")
const User = require("../models/User")
const usersController = {}

usersController.createUser = async (req, res) => {

    try{
        const { name, description, file, type } = req.body

        const usernameExists = await User.findOne({name})

        if(usernameExists){
            res.status(400).json({message: "Usuario ya existe"})
        } else {
            const newUser = new User({name, description, file, type})

            await newUser.save()

            res.status(201).json({message: "Usuario Creado", newUser})
        }
    } catch (error){
        console.log(error)
        res.status(400).json({message: "Error al crear el usuario", error})
    }
}

usersController.updateUser = async (req, res) => {

    try{
        const idUser = req.params.id_user

        const updatedUser = await User.findByIdAndUpdate(idUser, req.body, {new: true})

        if(updatedUser) res.status(201).json({message: "Usuario Actualizado", updatedUser})
        else res.status(202).json({message: "El usuario no existe"})
    } catch (error){
        console.log(error)
        res.status(400).json({error})
    }
}

usersController.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()

        if(users) res.status(200).json(users)
        else res.status(202).json({message: "users not found"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

usersController.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id_user)

        if(user) res.status(200).json({message: "user found", user})
        else res.status(202).json({message: "user not found"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

usersController.deleteUser = async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id_user)

        res.status(202).json({message: "user deleted"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

//ejercicio avanzado
usersController.getAllMichaels = async (req, res) => {
    try {
        const users = await User.find({type: "Michael"})

        if(users) res.status(200).json({message: "users found", users})
        else res.status(202).json({message: "users not found"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

module.exports = usersController