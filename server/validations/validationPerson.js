const Joi = require('joi')

const signUpValidation = (data) => {
    // const roles = ["admin", "technician", "user"];

    const Schema = Joi.object({
        first_name : Joi.string().required().min(4),
        last_name : Joi.string().required().min(3),
        username : Joi.string().required().min(4),
        birth_day : Joi.string().required(),
        adress : Joi.string().required().min(4),
        phone : Joi.string().required().min(4),
        email : Joi.string().required().email().min(6),
        password : Joi.string().required().min(6),
        black_listed : Joi.string()
   
    })
    return Schema.validate(data)
};

const signInValidation = (data) => {
    const Schema = Joi.object({
        email : Joi.string().required().email().min(6),
        password : Joi.string().required().min(6)
    })
    return Schema.validate(data)
}

module.exports = {signUpValidation, signInValidation}