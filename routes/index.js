const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc    Login/Landing page
// @route   GET /
// router.get('/', ensureGuest, (req, res) => {
//     res.render('Login', {
//         layout: 'login'
//     })
// })
router.get('/', (req, res) => {
    res.render('Login', {
        layout: 'login'
    })
})

// @desc    Dashboard
// @route   GET /dashboard
// router.get('/dashboard', ensureAuth, (req, res) => {
//     res.render('Dashboard')
// })
router.get('/dashboard', (req, res) => {
    console.log(req.user)
    res.render('Dashboard')
})



module.exports = router