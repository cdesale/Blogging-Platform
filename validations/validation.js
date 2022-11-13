const joi = require('joi')

const EMAIL_VALIDATION = joi.string().required().min(6).max(256).email()
const PASSWORD_VALIDATION = joi.string().required().min(6).max(1024)

const registerFormValidation = (data)=>{
    const schemaValidation = joi.object({
        username: joi.string().required().min(3).max(256),
        email: EMAIL_VALIDATION,
        password: PASSWORD_VALIDATION
    })

    return schemaValidation.validate(data)
}

const loginFormValidation = (data)=>{
    const schemaValidation = joi.object({
        email: EMAIL_VALIDATION,
        password: PASSWORD_VALIDATION
    })
    
    return schemaValidation.validate(data)
}

module.exports.registerFormValidation = registerFormValidation
module.exports.loginFormValidation = loginFormValidation
