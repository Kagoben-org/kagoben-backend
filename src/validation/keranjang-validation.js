import Joi from "joi"

const createKeranjangValidation = Joi.object({
  nama: Joi.string().max(100).required(),
  tanggal: Joi.date().required()
})

const getAllKeranjangValidation = Joi.number().positive().required()

const findKeranjangValidation = Joi.number().positive().required()



export { createKeranjangValidation, getAllKeranjangValidation, findKeranjangValidation }