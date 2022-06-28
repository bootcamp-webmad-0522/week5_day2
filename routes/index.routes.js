const { rolesChecker } = require("../utils/roles-checker");

const router = require("express").Router()


router.get("/", (req, res, next) => {

  const roles = rolesChecker(req.session.currentUser)

  res.render("index", { roles })
})

//Auth routes
router.use("/", require("./auth.routes"))


//User routes
router.use("/", require("./user.routes"))


//Rooms routes
router.use("/habitaciones", require("./rooms.routes"))


//Admin routes
router.use("/", require("./admin.routes"))



module.exports = router
