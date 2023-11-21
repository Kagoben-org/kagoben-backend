import { prismaClient } from "../app/database.js"
import { createKeranjangValidation, findKeranjangValidation, getAllKeranjangValidation } from "../validation/keranjang-validation.js"
import { validate } from "../validation/validation.js"


const getAllKeranjang = async (req) => {
  const member_id = req.member.id // member_id
  validate(getAllKeranjangValidation, member_id) // member_id
  return await prismaClient.keranjang.findMany({
    where: {
      member_id: member_id
    }
  })
}

const createKeranjang = async (req) => {
  const keranjang = validate(createKeranjangValidation, req.body) //name, date, member_id
  return await prismaClient.keranjang.create({
    data: keranjang
  })
}

const findKeranjang = async (req) => {
  const keranjang_id = req.params.keranjang_id
  const member_id = req.member.id
  validate(findKeranjangValidation, keranjang_id) //id keranjang

  return await prismaClient.keranjang.findFirst({
    where: {
      id: keranjang_id,
      member_id: member_id
    }
  })
}
export default { getAllKeranjang, createKeranjang, findKeranjang }