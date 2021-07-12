const express = require('express')
const userRoutes = express.Router()
const { addUser, loginUser, logoutUser, getAllUsers } = require('../controllers/Users.controllers')

// add users 
userRoutes.post('/addUser', addUser)
// login user
userRoutes.post('/loginUser', loginUser )
// Logout User
userRoutes.get('/logout', logoutUser)
// get all Users
userRoutes.get('/allUsers', getAllUsers)


module.exports = userRoutes