import Joi from "joi"


const registerMemberValidation = Joi.object({
  email: Joi.string().max(100).required(),
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  usia: Joi.string().max(3).required(),
  no_telepon: Joi.string().max(13).required(),
})

const loginMemberValidation = Joi.object({
  email: Joi.string().max(100).required(),
  password: Joi.string().max(100).required()
})

const logoutValidation = Joi.string().max(100).required()


export { registerMemberValidation, loginMemberValidation, logoutValidation }