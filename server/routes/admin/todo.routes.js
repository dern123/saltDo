const Router = require("express");
const router = Router;
const passport = require("passport");
const todoController = require("../../controllers/admin/todo.controller");


router.post("create", [passport.authenticate("jwt", {session:false}), permission], todoController.create);
router.post("edit", [passport.authenticate("jwt", {session:false}), permission], todoController.edit);

router.get("get", [passport.authenticate("jwt", {session:false}), permission], todoController.get);
router.get("get/:id", [passport.authenticate("jwt", {session:false}), permission], todoController.getById);

module.exports = router;