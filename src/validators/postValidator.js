import Joi from "joi";

const postValidator= Joi.object({
    userId:Joi.number().min(11).required(),
    title:Joi.string().regex(/^[a-zA-Zа-яА-Я]{1,10}$/).required().messages({
        'string.pattern.base':'Тільки букви від 1 до 10 значень'
    }),
    body:Joi.string().regex(/^[a-zA-Zа-яА-Яі]{1,20}$/).required().messages({
        'string.pattern.base':'Тільки букви від 1 до 20 значень'
    }),
})

export {
    postValidator
}