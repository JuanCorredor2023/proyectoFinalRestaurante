const express = require("express")
const router = express.Router()

const contactControllers =require("../controllers/contact.controllers")


router.post('/contact', contactControllers.called)
router.get('/getAllComments', contactControllers.getAllComments)
router.delete("/deleteComment", contactControllers.deleteComment)
router.post('/called', contactControllers.called)
router.put("/update/:id_comments", contactControllers.update)
router.post('/send', contactControllers.send)



module.exports = router;