import Joi from "joi"


const bahanValidation = Joi.object({
  name: Joi.string().max(100).required(),
  image: Joi.string().max(255).required(),
})

const searchBahanValidation = Joi.string().max(100).required()

export { bahanValidation, searchBahanValidation }