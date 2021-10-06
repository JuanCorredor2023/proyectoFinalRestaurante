const Comments = require("../model/Contact");
const contactControllers = {};

(contactControllers.called = async (req, res) => {
  const { name, subject, body, email } = req.body;

  const newContact = new Comments({ name, subject, body, email });

  const Registred = await newContact.save();

  if (Registred) {
    res.status(201).json({ message: "Su mensaje ha sido enviado", newContact });
  } else {
    res.status(400).json({ message: "Envío Fallido" });
  }
}),
  (contactControllers.getAllComments = async (req, res) => {
    try {
      const comments = await Comments.find();

      if (comments) res.status(200).json({ comments });
      else res.status(202).json({ message: "comments not found", comments });
    } catch (error) {
      res.status(400).json({ message: "Error", error });
    }
  }),
  (contactControllers.deleteComment = async (req, res) => {
    try {
      const deleted = await Comments.findByIdAndDelete(req.params.id_comment);

      res.status(202).json({ message: "comment deleted" });
    } catch (error) {
      res.status(400).json({ message: "Error", error });
    }
  });

contactControllers.update = async (req, res) => {
  try {
    console.log(req.params);
    const idMenu = req.params.id_comment;

    const updatedComments = await Comments.findByIdAndUpdate(
      id_comment,
      req.body,
      { new: true }
    );

    if (updatedComments)
      res.status(201).json({ message: "Datos actualizados", updatedComments });
    else res.status(202).json({ message: "Falla en actualización" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
contactControllers.send = async (req, res) => {
  const { name, subject, body,email } = req.body;

  const newContact = new answer({ name, subject, body,email });

  const Registred = await newContact.save();

  if (Registred) {
    res.status(201).json({ message: "Su mensaje ha sido enviado", newContact });
  } else {
    res.status(400).json({ message: "Envío Fallido" });
  }


};
module.exports = contactControllers;
