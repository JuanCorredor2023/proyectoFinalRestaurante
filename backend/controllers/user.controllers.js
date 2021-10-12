const User = require("../model/user");
const usersControllers = {};
const nodemailer = require("nodemailer");

const jwt = require("jsonwebtoken");

usersControllers.signup = async (req, res) => {
    console.log(req.body)
    const { email, password} = req.body;
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400).json({ message: "Usuario ya existe!" });
    } else {
      console.log()
      const newUser = new User({ email, password });
      await newUser.save();
  
      const token = jwt.sign({_id: newUser._id, email: newUser.email}, "pato")


      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "uncommon074@gmail.com",
          pass: "weAreARestaurant",
        },
      });
  
      const mailOptions = {
        from: "uncommon074@gmail.com",
        to: email,
        subject: "Te has registrado en UnCommon!",
        text: "Bienvenido a UnCommon!",
        html: `<!DOCTYPE html> <html> <body> <h2 style="color: black">¡Bienvenido a UnCommon!</h2> <h3 style="color: black">Bienvenido a tu Restaurante-Bar favorito. Te damos la bienvenida y esperamos que la plataforma sea de tu agrado. Tenemos una gran variedad de platos y productos que te encantarán. Cualquier queja o sugerencia la puedes realizar mediante nuestro correo electrónico: uncommon074@gmail.com. </h3> <a href="www.uncommon.com">Haz click aquí para visitar nuestro sitio</a> </body> </html>`
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

  
      res.status(201).json({ message: "Usuario creado", newUser });
    }
  };
  
  usersControllers.signin = async (req, res) => {
    //escribimos en el formulario
    const { email, password } = req.body;
  
    //lo que me devuelve la base de datos
    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(401).json({ message: "Usuario no existe" });
    }
  
    if (user.password !== password) {
      return res.status(401).json({ message: "La contraseña es incorrecta!" });
    }
  
    const token = jwt.sign({ _id: user._id, email: user.email,}, "pato");
  
    res.status(200).json({ message: "Tu estas logueado correctamente", token });
  };
  

  usersControllers.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()

        if(users) res.status(200).json(users)
        else res.status(202).json({message: "users not found"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}
usersControllers.updateUser = async (req, res) => {

  try{
      console.log(req.params)
      const idUser = req.params.id_user

      const updatedUser = await User.findByIdAndUpdate(idUser, req.body, {new: true})

      if(updatedUser) res.status(201).json({message: "Usuario Actualizado", updatedUser})
      else res.status(202).json({message: "El usuario no existe"})
  } catch (error){
      console.log(error)
      res.status(400).json({error})
  }
}
usersControllers.deleteUser = async (req, res) => {
  try {
      const deleted = await User.findByIdAndDelete(req.params.id_user)

      res.status(202).json({message: "user deleted"})
  } catch (error) {
      res.status(400).json({message: "Error", error})
  }
}



  module.exports = usersControllers;
