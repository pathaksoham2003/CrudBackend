const express = require("express");
const router = express.Router()
const {getUser,getspecificuser,postUser,patchUser,deleteUser} = require('../controller/userController');


router.get("/get",getUser);
router.get("/getspecificuser/:id",getspecificuser);
router.post("/post",postUser);
router.patch("/patch/:id",patchUser);
router.delete("/delete/:id",deleteUser);

module.exports = router;