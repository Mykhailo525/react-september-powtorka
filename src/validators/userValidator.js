import Joi from "joi";

const userValidator=Joi.object({
    username:Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base':'Безспецсимволів,не починати з цифрб,Bід 1 до 20 символів'
    }),
    password:Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required().messages({
        'string.pattern.base':'3 спецсимволи, 1 велика літера,1 цифра,Bід 1 до 128 символів'
    }),
})

export {
    userValidator
}