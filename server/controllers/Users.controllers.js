const Users = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { userLogin, userRegister } = require('../validations/validationUsers')

const maxAge = 1 * 24 * 60 * 60
const createToken = (id, role) => {
    return jwt.sign({id, role}, process.env.SECRET_TOKEN,{
        expiresIn : maxAge
    })
}

exports.addUser = async (req, res) => {
     // error 
    const {error} = userRegister(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message)
    }

    try {
        const {first_name, last_name , username, role, email, password, id_organism} = req.body
        // check the email is exist 
        const userExist = await Users.findOne({email : email})
        if (userExist) return res.status(400).json({message : "This Email Alredy Exist"})

        // hash password 
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // save user
        const newUser = new Users({
            first_name, 
            last_name , 
            username, 
            role, 
            email, 
            password : hashPassword, 
            id_organism 
        })
        const saveUser = await newUser.save()
        res.status(201).json({message: 'You Are Registered Successfully, you need to activate your compte'})
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.loginUser = async (req, res) => {
    const {error} = userLogin(req.body)
    if (error) {
        return res.status(400).json(error.details[0].message)
    }
    try {
        const {  email, password } = req.body
        // check the email if exist
        const existUser = await Users.findOne({email : email})
        if (!existUser) {
            return res.status(400).json({message : "This Email Are not Exist"})
        }
        // console.log(existUser)

        // else decrypt password
        const comparePassword = await bcrypt.compare(password , existUser.password)
        if (!comparePassword) {
            return res.status(400).json({message : "This Password Are Not Valid"})
        }
        // res.status(200).json({message : "logged In"})
        const token = createToken(existUser._id, existUser.role)
        return res.status(200).cookie('token_user', token, { httpOnly: true, maxAge : maxAge*100 }).json({message: 'Logged In', isAuth:true, role:existUser.role})

    } catch (error) {
        res.status(500).json(error)
    }
}

exports.logoutUser = (req, res) => {
    try {
        return res.status(200).clearCookie('token_user').json({isAuth:false, role:''})
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await Users.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json(error)
    }
}


