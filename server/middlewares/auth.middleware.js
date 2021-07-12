const jwt = require('jsonwebtoken')
const User = require('../models/User.model')

const verifyIsAuth = (req, res) => {
    const token = req.cookies.token_user
    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
           if(err){
               console.log(err.message)
               return res.status(400).clearcookie('token_user').json({isAuth : false, role : ''})
           }else{
               return res.status(200).json({isAuth : true, role : decodedToken.role})
           } 
        })
    }else{
        res.status(500).json({isAuth : false, role : ''})
    }
}

const isAdmin = (req, res, next) => {
    res.role = 'Admin'
    next()
}

const isTechnician = (req, res, next) => {
    res.role = 'Technician'
    next()
}

const isAuth = (req, res) => {
    const token = req.cookies.token_user
    if(token){
        jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
            if(!err && decodedToken.role === res.role){
                return res.status(200).json({isAuth : true, role : res.role})
            }else{
                res.status(400).clearcookie('token_user').json({isAuth : false, role : ''})
            }
        })
    }else{
        res.status(500).json({isAuth : false, role : ''})
    }
}

module.exports = { verifyIsAuth, isAdmin, isTechnician, isAuth }