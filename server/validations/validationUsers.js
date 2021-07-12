const Joi = require('joi')


const userRegister = (data) => {
    const Schema = Joi.object({
        first_name : Joi.string().required().min(4),
        last_name : Joi.string().required().min(4),
        username : Joi.string().required().min(4),
        role : Joi.string().required(),
        email : Joi.string().required().min(6),
        password : Joi.string().required().min(6),
        id_organism : Joi.string()
    })
    return Schema.validate(data)
}

const userLogin = (data) => {
    const Schema = Joi.object({
        email : Joi.string().required().min(6),
        password : Joi.string().required().min(6)
    })
    return Schema.validate(data)
}

module.exports = {userRegister, userLogin}