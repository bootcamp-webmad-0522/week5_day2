const router = require("express").Router();

const Room = require('./../models/Room.model')

const { isLoggedIn } = require('./../middleware/session-guard');
const { rolesChecker } = require("../utils/roles-checker");


// all rooms listing
router.get('/', (req, res) => {

    const roles = rolesChecker(req.session.currentUser)

    Room
        .find()
        .then(rooms => res.render('rooms/all-rooms', { rooms, roles }))
        .catch(err => console.log(err))
})


// user rooms listing
router.get('/mis-propiedades', isLoggedIn, (req, res) => {

    const { _id: owner } = req.session.currentUser

    Room
        .find({ owner })
        .then(rooms => res.render('rooms/my-rooms', { rooms }))
        .catch(err => console.log(err))
})


// new room form (render)
router.get('/crear', isLoggedIn, (req, res) => {
    res.render('rooms/new-room')
})


// new room form (handler)
router.post('/crear', isLoggedIn, (req, res) => {

    const { name, price } = req.body
    const { _id: owner } = req.session.currentUser

    Room
        .create({ name, price, owner })            // ojo al owner
        .then(() => res.redirect('/habitaciones'))
        .catch(err => console.log(err))
})




module.exports = router