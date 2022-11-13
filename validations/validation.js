const joi = require('joi')
const jsonwebtoken = require('jsonwebtoken')

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

const verifyToken = (req, res, next)=>{
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).send({message:'Access denied'})
    }
    try{
        const verified = jsonwebtoken.verify(token, process.env.TOKEN_SECRET)
        next()
    } catch(err){
        return res.status(401).send({message:'Invalid token'})
    }
}

module.exports.registerFormValidation = registerFormValidation
module.exports.loginFormValidation = loginFormValidation
module.exports.verifyToken = verifyToken
